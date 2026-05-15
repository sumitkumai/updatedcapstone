package com.edutech.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.edutech.dto.*;
import com.edutech.entity.User;
import com.edutech.service.AuthFlowService;
import com.edutech.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthFlowService authFlowService;

    @Autowired
    private UserService userService;

    private String clientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request, HttpServletRequest http) {
        try {
            return ResponseEntity.ok(authFlowService.register(request, clientIp(http)));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(error(e.getMessage()));
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@Valid @RequestBody VerifyOtpRequest request, HttpServletRequest http) {
        try {
            User user = authFlowService.verifyOtp(request, clientIp(http));
            Map<String, Object> body = new HashMap<>();
            body.put("message", "Registration successful");
            body.put("username", user.getUsername());
            body.put("email", user.getEmail());
            body.put("id", user.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(body);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(error(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request, HttpServletRequest http) {
        try {
            return ResponseEntity.ok(authFlowService.login(request, clientIp(http)));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error("Invalid username or password"));
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request, HttpServletRequest http) {
        try {
            return ResponseEntity.ok(authFlowService.forgotPassword(request, clientIp(http)));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(error(e.getMessage()));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest request, HttpServletRequest http) {
        try {
            return ResponseEntity.ok(authFlowService.resetPassword(request, clientIp(http)));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(error(e.getMessage()));
        }
    }

    @PostMapping("/user/activity")
    public ResponseEntity<?> activity(@AuthenticationPrincipal UserDetails userDetails) {
        try {
            authFlowService.updateActivity(userDetails.getUsername());
            Map<String, Object> body = new HashMap<>();
            body.put("message", "Activity updated");
            body.put("inactivityTimeoutMs", authFlowService.getInactivityTimeoutMs());
            return ResponseEntity.ok(body);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error(e.getMessage()));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@AuthenticationPrincipal UserDetails userDetails, HttpServletRequest http) {
        authFlowService.logout(userDetails.getUsername(), clientIp(http));
        return ResponseEntity.ok(ApiResponse.ok("Logged out successfully", null));
    }

    @PostMapping("/logout-all")
    public ResponseEntity<ApiResponse<Void>> logoutAll(@AuthenticationPrincipal UserDetails userDetails,
            HttpServletRequest http) {
        authFlowService.logoutAllDevices(userDetails.getUsername(), clientIp(http));
        return ResponseEntity.ok(ApiResponse.ok("Logged out from all devices", null));
    }

    @PostMapping("/admin/force-logout/{userId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> forceLogout(@PathVariable Long userId,
            @AuthenticationPrincipal UserDetails admin, HttpServletRequest http) {
        authFlowService.adminForceLogout(userId, admin.getUsername(), clientIp(http));
        return ResponseEntity.ok(ApiResponse.ok("User session terminated", null));
    }

    @GetMapping("/user")
    public ResponseEntity<?> getLoggedInUser(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());
        Map<String, Object> safe = new HashMap<>();
        safe.put("id", user.getId());
        safe.put("username", user.getUsername());
        safe.put("email", user.getEmail());
        safe.put("role", user.getRole());
        safe.put("contactNumber", user.getContactNumber());
        safe.put("verified", user.isVerified());
        return ResponseEntity.ok(safe);
    }

    private Map<String, Object> error(String message) {
        Map<String, Object> map = new HashMap<>();
        map.put("message", message);
        return map;
    }
}
