package com.edutech.service;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RateLimitService {

    @Value("${auth.rate-limit.max-attempts:5}")
    private int maxAttempts;

    @Value("${auth.rate-limit.window-seconds:60}")
    private int windowSeconds;

    private final Map<String, AttemptWindow> attempts = new ConcurrentHashMap<>();

    public void checkLimit(String key) {
        String bucketKey = key == null ? "unknown" : key;
        AttemptWindow window = attempts.computeIfAbsent(bucketKey, k -> new AttemptWindow());
        synchronized (window) {
            long now = Instant.now().getEpochSecond();
            if (now - window.windowStart >= windowSeconds) {
                window.windowStart = now;
                window.count = 0;
            }
            if (window.count >= maxAttempts) {
                throw new IllegalArgumentException("Too many attempts. Please try again later.");
            }
            window.count++;
        }
    }

    private static class AttemptWindow {
        long windowStart = Instant.now().getEpochSecond();
        int count = 0;
    }
}
