package com.edutech.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edutech.dto.AuthResponse;
import com.edutech.dto.ForgotPasswordRequest;
import com.edutech.dto.LoginRequest;
import com.edutech.dto.RegisterRequest;
import com.edutech.dto.ResetPasswordRequest;
import com.edutech.dto.VerifyOtpRequest;
import com.edutech.entity.RegistrationPending;
import com.edutech.entity.Role;
import com.edutech.entity.User;
import com.edutech.repository.RegistrationPendingRepository;
import com.edutech.repository.UserRepository;
import com.edutech.util.JwtUtil;

@Service
public class AuthFlowService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RegistrationPendingRepository pendingRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private CaptchaService captchaService;

    @Autowired
    private RateLimitService rateLimitService;

    @Autowired
    private AuditService auditService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private com.edutech.util.PasswordPolicyValidator passwordPolicyValidator;

    @Autowired
    private com.edutech.util.InputSanitizer inputSanitizer;

    @Value("${auth.max-failed-attempts:5}")
    private int maxFailedAttempts;

    @Value("${auth.lock-duration-minutes:15}")
    private int lockDurationMinutes;

    @Value("${auth.session.inactivity-timeout:900000}")
    private long inactivityTimeoutMs;

    @Transactional
    public Map<String, String> register(RegisterRequest request, String ip) {
        rateLimitService.checkLimit("register:" + request.getEmail());
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered");
        }
        if (request.getRole() == Role.ADMIN) {
            throw new IllegalArgumentException("Cannot self-register as ADMIN");
        }
        passwordPolicyValidator.validate(request.getPassword());
        request.setEmail(inputSanitizer.sanitizePlain(request.getEmail()));
        request.setUsername(inputSanitizer.sanitizePlain(request.getUsername()));
        pendingRepository.findByEmail(request.getEmail()).ifPresent(p -> pendingRepository.delete(p));
        pendingRepository.findByUsername(request.getUsername()).ifPresent(p -> pendingRepository.delete(p));

        String otp = otpService.generateOtp();
        RegistrationPending pending = new RegistrationPending();
        pending.setUsername(request.getUsername());
        pending.setEmail(request.getEmail());
        pending.setPassword(passwordEncoder.encode(request.getPassword()));
        pending.setContactNumber(request.getContactNumber());
        pending.setRole(request.getRole() != null ? request.getRole() : Role.PASSENGER);
        pending.setOtp(otp);
        pending.setOtpExpiry(otpService.otpExpiry());
        pendingRepository.save(pending);

        emailService.sendOtpEmail(request.getEmail(), otp);
        auditService.log(request.getUsername(), "REGISTER_OTP_SENT", request.getEmail(), ip);
        Map<String, String> response = new HashMap<>();
        response.put("message", "OTP sent to your email. Verify within 5 minutes.");
        response.put("email", request.getEmail());
        return response;
    }

    @Transactional
    public User verifyOtp(VerifyOtpRequest request, String ip) {
        rateLimitService.checkLimit("verify:" + request.getEmail());
        RegistrationPending pending = pendingRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("No pending registration for this email"));
        if (otpService.isExpired(pending.getOtpExpiry())) {
            pendingRepository.delete(pending);
            throw new IllegalArgumentException("OTP has expired. Please register again.");
        }
        if (!pending.getOtp().equals(request.getOtp())) {
            throw new IllegalArgumentException("Invalid OTP");
        }
        User user = new User();
        user.setUsername(pending.getUsername());
        user.setEmail(pending.getEmail());
        user.setPassword(pending.getPassword());
        user.setContactNumber(pending.getContactNumber());
        user.setRole(pending.getRole());
        user.setVerified(true);
        user.setLoginStatus(false);
        user = userRepository.save(user);
        pendingRepository.delete(pending);
        emailService.sendWelcomeEmail(user.getEmail(), user.getUsername());
        auditService.log(user.getUsername(), "REGISTER_VERIFIED", user.getEmail(), ip);
        return user;
    }

    @Transactional
    public AuthResponse login(LoginRequest request, String ip) {
        rateLimitService.checkLimit("login:" + request.getUsername());
        captchaService.validate(request.getCaptchaToken());

        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            recordFailedLogin(null, request.getUsername(), ip);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (isAccountLocked(user)) {
            throw new IllegalArgumentException("Account is locked. Try again later.");
        }
        if (!user.isVerified()) {
            throw new IllegalArgumentException("Email not verified. Complete registration first.");
        }
        if (user.isLoginStatus() && user.getActiveSessionId() != null) {
            if (isInactive(user)) {
                user.setLoginStatus(false);
                user.setActiveSessionId(null);
                user.setRefreshToken(null);
                userRepository.save(user);
            } else {
                throw new IllegalArgumentException("Account already logged in on another device. Logout first.");
            }
        }
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (Exception ex) {
            recordFailedLogin(user, request.getUsername(), ip);
            throw new BadCredentialsException("Invalid username or password");
        }

        user.setFailedLoginAttempts(0);
        user.setLockedUntil(null);
        String sessionId = UUID.randomUUID().toString();
        user.setActiveSessionId(sessionId);
        user.setLoginStatus(true);
        user.setLastActivityTime(LocalDateTime.now());
        String refreshToken = UUID.randomUUID().toString();
        user.setRefreshToken(refreshToken);
        user.setRefreshTokenExpiry(LocalDateTime.now().plusDays(1));
        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getUsername(), user.getRole().name(), sessionId);
        auditService.log(user.getUsername(), "LOGIN_SUCCESS", sessionId, ip);

        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setRefreshToken(refreshToken);
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setId(user.getId());
        response.setSessionId(sessionId);
        return response;
    }

    @Transactional
    public Map<String, String> forgotPassword(ForgotPasswordRequest request, String ip) {
        rateLimitService.checkLimit("forgot:" + request.getEmail());
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("No account found with this email"));
        String otp = otpService.generateOtp();
        user.setOtp(otp);
        user.setOtpExpiry(otpService.resetExpiry());
        user.setResetToken(otp);
        user.setResetTokenExpiry(otpService.resetExpiry());
        userRepository.save(user);
        emailService.sendPasswordResetEmail(user.getEmail(), otp);
        auditService.log(user.getUsername(), "FORGOT_PASSWORD", request.getEmail(), ip);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Password reset OTP sent to your email.");
        return response;
    }

    @Transactional
    public Map<String, String> resetPassword(ResetPasswordRequest request, String ip) {
        rateLimitService.checkLimit("reset:" + request.getEmail());
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid reset request"));
        if (otpService.isExpired(user.getResetTokenExpiry()) || otpService.isExpired(user.getOtpExpiry())) {
            throw new IllegalArgumentException("Reset token has expired. Request a new one.");
        }
        String token = user.getResetToken() != null ? user.getResetToken() : user.getOtp();
        if (token == null || !token.equals(request.getOtp())) {
            throw new IllegalArgumentException("Invalid OTP or reset token");
        }
        passwordPolicyValidator.validate(request.getNewPassword());
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        user.setOtp(null);
        user.setOtpExpiry(null);
        user.setResetToken(null);
        user.setResetTokenExpiry(null);
        user.setFailedLoginAttempts(0);
        user.setLockedUntil(null);
        userRepository.save(user);
        auditService.log(user.getUsername(), "PASSWORD_RESET", request.getEmail(), ip);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Password reset successful. You can login now.");
        return response;
    }

    @Transactional
    public void updateActivity(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null || !user.isLoginStatus()) {
            throw new IllegalStateException("No active session");
        }
        user.setLastActivityTime(LocalDateTime.now());
        userRepository.save(user);
    }

    @Transactional
    public void logout(String username, String ip) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            clearSession(user);
            userRepository.save(user);
            auditService.log(username, "LOGOUT", null, ip);
        }
    }

    @Transactional
    public void logoutAllDevices(String username, String ip) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new IllegalArgumentException("User not found");
        }
        clearSession(user);
        userRepository.save(user);
        auditService.log(username, "LOGOUT_ALL_DEVICES", null, ip);
    }

    @Transactional
    public void adminForceLogout(Long targetUserId, String adminUsername, String ip) {
        User user = userRepository.findById(targetUserId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        clearSession(user);
        userRepository.save(user);
        auditService.log(adminUsername, "ADMIN_FORCE_LOGOUT", user.getUsername(), ip);
    }

    private void clearSession(User user) {
        user.setLoginStatus(false);
        user.setActiveSessionId(null);
        user.setRefreshToken(null);
        user.setRefreshTokenExpiry(null);
    }

    public void validateSession(User user, String sessionIdFromToken) {
        if (!user.isLoginStatus()) {
            throw new IllegalStateException("Session ended");
        }
        if (user.getActiveSessionId() == null || !user.getActiveSessionId().equals(sessionIdFromToken)) {
            throw new IllegalStateException("Invalid session");
        }
        if (isInactive(user)) {
            throw new IllegalStateException("Session expired due to inactivity");
        }
    }

    public boolean isInactive(User user) {
        if (user.getLastActivityTime() == null) {
            return false;
        }
        long lastMs = user.getLastActivityTime()
                .atZone(java.time.ZoneId.systemDefault())
                .toInstant()
                .toEpochMilli();
        return System.currentTimeMillis() - lastMs > inactivityTimeoutMs;
    }

    public long getInactivityTimeoutMs() {
        return inactivityTimeoutMs;
    }

    private boolean isAccountLocked(User user) {
        return user.getLockedUntil() != null && LocalDateTime.now().isBefore(user.getLockedUntil());
    }

    private void recordFailedLogin(User user, String username, String ip) {
        if (user == null) {
            auditService.log(username, "LOGIN_FAILED", "unknown user", ip);
            return;
        }
        int attempts = user.getFailedLoginAttempts() + 1;
        user.setFailedLoginAttempts(attempts);
        if (attempts >= maxFailedAttempts) {
            user.setLockedUntil(LocalDateTime.now().plusMinutes(lockDurationMinutes));
            auditService.log(username, "ACCOUNT_LOCKED", String.valueOf(attempts), ip);
        } else {
            auditService.log(username, "LOGIN_FAILED", "attempt " + attempts, ip);
        }
        userRepository.save(user);
    }
}
