package com.edutech.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class CaptchaService {

    private static final Logger log = LoggerFactory.getLogger(CaptchaService.class);

    @Value("${captcha.enabled:true}")
    private boolean captchaEnabled;

    @Value("${recaptcha.secret-key:}")
    private String secretKey;

    @Value("${recaptcha.verify-url:https://www.google.com/recaptcha/api/siteverify}")
    private String verifyUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public void validate(String captchaToken) {
        if (!captchaEnabled) {
            return;
        }
        if (captchaToken == null || captchaToken.isBlank()) {
            throw new IllegalArgumentException("CAPTCHA verification is required");
        }
        if (secretKey == null || secretKey.isBlank() || secretKey.startsWith("your-")) {
            log.warn("reCAPTCHA secret not configured; rejecting login when captcha.enabled=true");
            throw new IllegalArgumentException("CAPTCHA is not configured on the server");
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("secret", secretKey);
        body.add("response", captchaToken);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(verifyUrl, request, Map.class);
        Map<?, ?> result = response.getBody();
        if (result == null || !Boolean.TRUE.equals(result.get("success"))) {
            throw new IllegalArgumentException("CAPTCHA verification failed");
        }
    }
}
