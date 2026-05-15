package com.edutech.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.edutech.dto.ApiResponse;
import com.edutech.entity.Bookings;
import com.edutech.entity.User;
import com.edutech.repository.UserRepository;
import com.edutech.security.BookingSecurityService;
import com.edutech.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "*")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookingSecurityService bookingSecurity;

    @PostMapping("/create-order/{bookingId}")
    @PreAuthorize("@bookingSecurity.isOwner(#bookingId, authentication)")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createOrder(@PathVariable Long bookingId)
            throws Exception {
        return ResponseEntity.ok(ApiResponse.ok(paymentService.createOrder(bookingId)));
    }

    @PostMapping("/verify")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse<Bookings>> verify(@RequestBody Map<String, Object> body,
            Authentication auth) throws Exception {
        Long bookingId = Long.valueOf(String.valueOf(body.get("bookingId")));
        if (!bookingSecurity.isOwner(bookingId, auth)) {
            return ResponseEntity.status(403).body(ApiResponse.error(403, "Forbidden"));
        }
        Bookings booking = paymentService.verifyPayment(
                bookingId,
                String.valueOf(body.get("paymentId")),
                String.valueOf(body.get("orderId")),
                String.valueOf(body.get("signature")));
        return ResponseEntity.ok(ApiResponse.ok("Payment verified", booking));
    }

    @PostMapping("/retry/{bookingId}")
    @PreAuthorize("@bookingSecurity.isOwner(#bookingId, authentication)")
    public ResponseEntity<ApiResponse<Map<String, Object>>> retry(@PathVariable Long bookingId) throws Exception {
        return ResponseEntity.ok(ApiResponse.ok(paymentService.retryPayment(bookingId)));
    }

    @PostMapping("/simulate-success/{bookingId}")
    @PreAuthorize("@bookingSecurity.isOwner(#bookingId, authentication)")
    public ResponseEntity<ApiResponse<Bookings>> simulateSuccess(@PathVariable Long bookingId) throws Exception {
        Bookings booking = paymentService.verifyPayment(bookingId, "pay_sim_" + bookingId,
                "order_sim", "sim_signature");
        return ResponseEntity.ok(ApiResponse.ok("Payment simulated", booking));
    }
}
