package com.edutech.service;

import java.security.SecureRandom;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OtpService {

    private static final SecureRandom RANDOM = new SecureRandom();

    @Value("${auth.otp.expiry-minutes:5}")
    private int otpExpiryMinutes;

    @Value("${auth.reset-token.expiry-minutes:10}")
    private int resetExpiryMinutes;

    public String generateOtp() {
        int code = 100000 + RANDOM.nextInt(900000);
        return String.valueOf(code);
    }

    public LocalDateTime otpExpiry() {
        return LocalDateTime.now().plusMinutes(otpExpiryMinutes);
    }

    public LocalDateTime resetExpiry() {
        return LocalDateTime.now().plusMinutes(resetExpiryMinutes);
    }

    public boolean isExpired(LocalDateTime expiry) {
        return expiry == null || LocalDateTime.now().isAfter(expiry);
    }
}
