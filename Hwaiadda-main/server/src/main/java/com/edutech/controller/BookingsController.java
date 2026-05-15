package com.edutech.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.edutech.dto.ApiResponse;
import com.edutech.dto.BookSeatsRequest;
import com.edutech.entity.Bookings;
import com.edutech.entity.Role;
import com.edutech.entity.User;
import com.edutech.repository.UserRepository;
import com.edutech.service.BookingService;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "*")
public class BookingsController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private UserRepository userRepository;

    private User currentUser(Authentication auth) {
        return userRepository.findByUsername(auth.getName());
    }

    private boolean isAdmin(User user) {
        return user.getRole() == Role.ADMIN;
    }

    @PostMapping("/initiate")
    @PreAuthorize("hasAnyAuthority('PASSENGER','ADMIN')")
    public ResponseEntity<ApiResponse<Bookings>> initiate(@RequestBody BookSeatsRequest request, Authentication auth) {
        User user = currentUser(auth);
        if (!isAdmin(user) && !user.getId().equals(request.getUserId())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(ApiResponse.error(403, "Cannot book for another user"));
        }
        Bookings booking = bookingService.initiateBooking(
                request.getFlightId(), request.getSeatNumbers(), request.getUserId());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.created("Booking initiated. Complete payment.", booking));
    }

    @Deprecated
    @PostMapping("/book-seats")
    @PreAuthorize("hasAnyAuthority('PASSENGER','ADMIN')")
    public ResponseEntity<ApiResponse<Map<String, Object>>> bookSeatsLegacy(@RequestBody BookSeatsRequest request,
            Authentication auth) {
        User user = currentUser(auth);
        if (!isAdmin(user) && !user.getId().equals(request.getUserId())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ApiResponse.error(403, "Forbidden"));
        }
        Bookings booking = bookingService.initiateBooking(
                request.getFlightId(), request.getSeatNumbers(), request.getUserId());
        Map<String, Object> data = new HashMap<>();
        data.put("bookingId", booking.getId());
        data.put("message", "Use /api/payment/create-order to pay");
        return ResponseEntity.ok(ApiResponse.ok("Booking initiated", data));
    }

    @GetMapping("/bookings")
    @PreAuthorize("hasAnyAuthority('PASSENGER','PILOT','ADMIN')")
    public ResponseEntity<ApiResponse<List<Bookings>>> getMyBookings(Authentication auth) {
        User user = currentUser(auth);
        return ResponseEntity.ok(ApiResponse.ok(bookingService.getBookingsByUser(user.getId())));
    }

    @GetMapping("/bookingList")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ApiResponse<List<Bookings>>> getAllBookings() {
        return ResponseEntity.ok(ApiResponse.ok(bookingService.getBookingListUser()));
    }

    @GetMapping("/{id}")
    @PreAuthorize("@bookingSecurity.isOwner(#id, authentication)")
    public ResponseEntity<ApiResponse<Bookings>> getBooking(@PathVariable Long id, Authentication auth) {
        User user = currentUser(auth);
        return ResponseEntity.ok(ApiResponse.ok(
                bookingService.getBookingForUser(id, user.getId(), isAdmin(user))));
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("@bookingSecurity.isOwner(#id, authentication)")
    public ResponseEntity<ApiResponse<String>> updateBookingStatus(@PathVariable Long id,
            @RequestBody Map<String, String> body, Authentication auth) {
        User user = currentUser(auth);
        bookingService.updateBookingStatus(id, body.get("status"), user.getId(), isAdmin(user));
        return ResponseEntity.ok(ApiResponse.ok("Booking status updated", body.get("status")));
    }

    @DeleteMapping("/bookings/{id}")
    @PreAuthorize("@bookingSecurity.isOwner(#id, authentication)")
    public ResponseEntity<ApiResponse<Void>> cancelBooking(@PathVariable Long id, Authentication auth) {
        User user = currentUser(auth);
        bookingService.cancelBooking(id, user.getId(), isAdmin(user));
        return ResponseEntity.ok(ApiResponse.ok("Booking cancelled", null));
    }

    @GetMapping("/ticket/{id}")
    @PreAuthorize("@bookingSecurity.isOwner(#id, authentication)")
    public ResponseEntity<byte[]> downloadTicket(@PathVariable Long id, Authentication auth) {
        User user = currentUser(auth);
        byte[] pdf = bookingService.generateTicketPdf(id, user.getId(), isAdmin(user));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "ticket-" + id + ".pdf");
        return new ResponseEntity<>(pdf, headers, HttpStatus.OK);
    }
}
