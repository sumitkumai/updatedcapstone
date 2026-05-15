package com.edutech.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.edutech.dto.ApiResponse;
import com.edutech.service.AnalyticsService;

@RestController
@RequestMapping("/api/admin/analytics")
@CrossOrigin(origins = "*")
@PreAuthorize("hasAuthority('ADMIN')")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/dashboard")
    public ResponseEntity<ApiResponse<Map<String, Object>>> dashboard() {
        return ResponseEntity.ok(ApiResponse.ok(analyticsService.getDashboardMetrics()));
    }
}
