package com.edutech.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.edutech.entity.Bookings;
import com.edutech.entity.Flights;
import com.edutech.entity.User;
import com.edutech.repository.BookingRepository;
import com.edutech.repository.FlightsRepository;
import com.edutech.repository.SeatRepository;
import com.edutech.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class BookingServiceTest {

    @Mock
    private BookingRepository bookingRepository;
    @Mock
    private FlightsRepository flightsRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private SeatRepository seatRepository;
    @Mock
    private SeatLockService seatLockService;
    @Mock
    private NotificationService notificationService;

    @InjectMocks
    private BookingService bookingService;

    private User user;
    private Flights flight;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);
        flight = new Flights();
        flight.setId(10L);
        flight.setAvailable_seats(50);
        flight.setPrice(5000);
    }

    @Test
    void getBookingForUser_deniesOtherUser() {
        Bookings booking = new Bookings();
        booking.setUser(user);
        User other = new User();
        other.setId(99L);
        when(bookingRepository.findById(1L)).thenReturn(Optional.of(booking));

        assertThrows(org.springframework.security.access.AccessDeniedException.class,
                () -> bookingService.getBookingForUser(1L, 99L, false));
    }

    @Test
    void confirmPayment_setsSuccessStatus() {
        Bookings booking = new Bookings();
        booking.setId(5L);
        booking.setUser(user);
        booking.setFlight(flight);
        booking.setSeatNumbers("A1,A2");
        booking.setAmount(10000.0);
        when(bookingRepository.findById(5L)).thenReturn(Optional.of(booking));
        when(bookingRepository.save(any())).thenAnswer(i -> i.getArgument(0));
        when(flightsRepository.findById(10L)).thenReturn(Optional.of(flight));

        Bookings result = bookingService.confirmPayment(5L, "pay_123");

        assertEquals(Bookings.PaymentStatus.SUCCESS, result.getPaymentStatus());
        assertEquals("CONFIRMED", result.getStatus());
        verify(notificationService).sendBookingConfirmation(any());
    }
}
