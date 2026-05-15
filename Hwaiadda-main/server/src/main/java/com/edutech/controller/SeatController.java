package com.edutech.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.edutech.dto.ApiResponse;
import com.edutech.entity.Seat;
import com.edutech.entity.User;
import com.edutech.repository.UserRepository;
import com.edutech.service.SeatLockService;
import com.edutech.service.SeatService;

@RestController
@RequestMapping("/api/seats")
@CrossOrigin(origins = "*")
public class SeatController {

    @Autowired
    private SeatService seatService;

    @Autowired
    private SeatLockService seatLockService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/flights/{flightId}/seats")
    public ResponseEntity<ApiResponse<List<Seat>>> getSeatsByFlight(@PathVariable Long flightId) {
        return ResponseEntity.ok(ApiResponse.ok(seatService.getSeatsByFlight(flightId)));
    }

    @PostMapping("/flights/{flightId}/lock")
    public ResponseEntity<ApiResponse<String>> lockSeats(@PathVariable Long flightId,
            @RequestBody Map<String, Object> body, Authentication auth) {
        User user = userRepository.findByUsername(auth.getName());
        @SuppressWarnings("unchecked")
        List<String> seatNumbers = (List<String>) body.get("seatNumbers");
        seatLockService.lockSeats(flightId, seatNumbers, user.getId());
        return ResponseEntity.ok(ApiResponse.ok("Seats locked", "Locked for 3 minutes"));
    }

    @PostMapping("/flights/{flightId}/release")
    public ResponseEntity<ApiResponse<String>> releaseSeats(@PathVariable Long flightId,
            @RequestBody Map<String, Object> body, Authentication auth) {
        User user = userRepository.findByUsername(auth.getName());
        @SuppressWarnings("unchecked")
        List<String> seatNumbers = (List<String>) body.get("seatNumbers");
        seatLockService.releaseLocks(flightId, seatNumbers, user.getId());
        return ResponseEntity.ok(ApiResponse.ok("Seats released", null));
    }
}
