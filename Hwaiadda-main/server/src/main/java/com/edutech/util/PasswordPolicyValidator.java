package com.edutech.util;

import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

@Component
public class PasswordPolicyValidator {

    private static final Pattern POLICY = Pattern.compile(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    public void validate(String password) {
        if (password == null || !POLICY.matcher(password).matches()) {
            throw new IllegalArgumentException(
                    "Password must be 8+ chars with uppercase, lowercase, digit, and special character (@$!%*?&)");
        }
    }
}
