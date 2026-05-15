package com.edutech.util;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class PasswordPolicyValidatorTest {

    private final PasswordPolicyValidator validator = new PasswordPolicyValidator();

    @Test
    void acceptsStrongPassword() {
        assertDoesNotThrow(() -> validator.validate("Admin@123"));
    }

    @Test
    void rejectsWeakPassword() {
        assertThrows(IllegalArgumentException.class, () -> validator.validate("weak"));
    }
}
