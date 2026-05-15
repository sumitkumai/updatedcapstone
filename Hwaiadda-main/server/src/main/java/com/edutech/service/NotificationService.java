package com.edutech.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edutech.entity.Bookings;

@Service
public class NotificationService {

    @Autowired
    private EmailService emailService;

    public void sendBookingConfirmation(Bookings booking) {
        String subject = "Booking Confirmed - PNR " + booking.getPnr();
        String body = "<p>Your flight booking is confirmed.</p>"
                + "<p><strong>PNR:</strong> " + booking.getPnr() + "</p>"
                + "<p><strong>Flight:</strong> " + booking.getFlight().getFlight_number() + "</p>"
                + "<p><strong>Route:</strong> " + booking.getFlight().getSource() + " → "
                + booking.getFlight().getDestination() + "</p>"
                + "<p><strong>Seats:</strong> " + booking.getSeatNumbers() + "</p>"
                + "<p><strong>Amount paid:</strong> ₹" + booking.getAmount() + "</p>";
        emailService.sendNotification(booking.getUser().getEmail(), subject, body);
    }

    public void sendCancellationAlert(Bookings booking) {
        String subject = "Booking Cancelled - PNR " + booking.getPnr();
        String body = "<p>Your booking has been cancelled.</p>"
                + "<p><strong>PNR:</strong> " + booking.getPnr() + "</p>"
                + "<p><strong>Flight:</strong> " + booking.getFlight().getFlight_number() + "</p>";
        emailService.sendNotification(booking.getUser().getEmail(), subject, body);
    }
}
