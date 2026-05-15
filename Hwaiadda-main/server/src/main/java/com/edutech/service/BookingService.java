package com.edutech.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edutech.entity.Bookings;
import com.edutech.entity.Flights;
import com.edutech.entity.Seat;
import com.edutech.entity.User;
import com.edutech.repository.BookingRepository;
import com.edutech.repository.FlightsRepository;
import com.edutech.repository.SeatRepository;
import com.edutech.repository.UserRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.lowagie.text.Document;
import com.lowagie.text.Image;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

@Service
public class BookingService implements org.springframework.beans.factory.DisposableBean {

    private static final Logger log = LoggerFactory.getLogger(BookingService.class);

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private FlightsRepository flightsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private SeatLockService seatLockService;

    @Autowired
    private NotificationService notificationService;

    @PostConstruct
    public void init() {
        log.info("BookingService initialized");
    }

    @PreDestroy
    public void destroy() {
        log.info("BookingService destroyed - cleanup complete");
    }

    @Transactional
    public Bookings initiateBooking(Long flightId, List<String> seatNumbers, Long userId) {
        seatLockService.lockSeats(flightId, seatNumbers, userId);

        Flights flight = flightsRepository.findById(flightId)
                .orElseThrow(() -> new EntityNotFoundException("Flight not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        double amount = seatNumbers.stream()
                .mapToDouble(sn -> seatRepository.findByFlightIdAndSeatNumberIn(flightId, List.of(sn))
                        .stream().findFirst().map(Seat::getPrice).orElse(flight.getPrice()))
                .sum();

        String pnr = "PNR" + UUID.randomUUID().toString().replace("-", "").substring(0, 8).toUpperCase();

        Bookings booking = new Bookings();
        booking.setFlight(flight);
        booking.setUser(user);
        booking.setSeatNumbers(String.join(",", seatNumbers));
        booking.setBookingDate(LocalDateTime.now());
        booking.setStatus("PENDING_PAYMENT");
        booking.setPaymentStatus(Bookings.PaymentStatus.PENDING);
        booking.setPnr(pnr);
        booking.setAmount(amount);

        return bookingRepository.save(booking);
    }

    @Transactional
    public Bookings confirmPayment(Long bookingId, String paymentId) {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found"));

        List<String> seatNums = Arrays.asList(booking.getSeatNumbers().split(","));
        seatLockService.confirmSeatsBooked(booking.getFlight().getId(), seatNums);

        Flights flight = booking.getFlight();
        flight.setAvailable_seats(Math.max(0, flight.getAvailable_seats() - seatNums.size()));
        flightsRepository.save(flight);

        booking.setPaymentId(paymentId);
        booking.setPaymentStatus(Bookings.PaymentStatus.SUCCESS);
        booking.setStatus("CONFIRMED");
        booking = bookingRepository.save(booking);

        notificationService.sendBookingConfirmation(booking);
        return booking;
    }

    @Transactional
    public Bookings markPaymentFailed(Long bookingId) {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found"));
        List<String> seatNums = Arrays.asList(booking.getSeatNumbers().split(","));
        seatLockService.releaseLocks(booking.getFlight().getId(), seatNums, booking.getUser().getId());
        booking.setPaymentStatus(Bookings.PaymentStatus.FAILED);
        booking.setStatus("PAYMENT_FAILED");
        return bookingRepository.save(booking);
    }

    public Bookings getBookingForUser(Long bookingId, Long userId, boolean isAdmin) {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found"));
        if (!isAdmin && !booking.getUser().getId().equals(userId)) {
            throw new org.springframework.security.access.AccessDeniedException("Not your booking");
        }
        return booking;
    }

    public List<Bookings> getBookingsByUser(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    public List<Bookings> getBookingListUser() {
        return bookingRepository.findAll();
    }

    @Transactional
    public void updateBookingStatus(Long id, String status, Long requesterId, boolean isAdmin) {
        Bookings booking = bookingRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found"));
        if (!isAdmin && !booking.getUser().getId().equals(requesterId)) {
            throw new org.springframework.security.access.AccessDeniedException("Not your booking");
        }
        booking.setStatus(status);
        bookingRepository.save(booking);

        if ("CANCELLED".equals(status)) {
            releaseSeatsForBooking(booking);
            notificationService.sendCancellationAlert(booking);
        }
    }

    @Transactional
    public void cancelBooking(Long id, Long requesterId, boolean isAdmin) {
        Bookings booking = getBookingForUser(id, requesterId, isAdmin);
        releaseSeatsForBooking(booking);
        booking.setStatus("CANCELLED");
        bookingRepository.save(booking);
        notificationService.sendCancellationAlert(booking);
    }

    private void releaseSeatsForBooking(Bookings booking) {
        if (booking.getSeatNumbers() == null || booking.getSeatNumbers().isEmpty()) {
            return;
        }
        List<String> seatNums = Arrays.asList(booking.getSeatNumbers().split(","));
        List<Seat> seats = seatRepository.findByFlightIdAndSeatNumberIn(
                booking.getFlight().getId(), seatNums);
        for (Seat seat : seats) {
            seat.setAvailable(true);
            seat.setLockedUntil(null);
            seat.setLockedByUserId(null);
        }
        seatRepository.saveAll(seats);
        Flights flight = booking.getFlight();
        flight.setAvailable_seats(flight.getAvailable_seats() + seatNums.size());
        flightsRepository.save(flight);
    }

    public byte[] generateTicketPdf(Long bookingId, Long userId, boolean isAdmin) {
        Bookings booking = getBookingForUser(bookingId, userId, isAdmin);
        if (booking.getPaymentStatus() != Bookings.PaymentStatus.SUCCESS) {
            throw new IllegalStateException("Ticket available only after successful payment");
        }

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Document document = new Document();
        try {
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(new Paragraph("Airline Booking - E-Ticket"));
            document.add(new Paragraph("PNR: " + booking.getPnr()));
            document.add(new Paragraph("Passenger: " + booking.getUser().getUsername()));
            document.add(new Paragraph("Email: " + booking.getUser().getEmail()));
            document.add(new Paragraph("Flight: " + booking.getFlight().getFlight_name()
                    + " (" + booking.getFlight().getFlight_number() + ")"));
            document.add(new Paragraph("Route: " + booking.getFlight().getSource() + " → "
                    + booking.getFlight().getDestination()));
            document.add(new Paragraph("Date: " + booking.getFlight().getDepartureDate()));
            document.add(new Paragraph("Departure: " + booking.getFlight().getDepartureTime()));
            document.add(new Paragraph("Arrival: " + booking.getFlight().getArrivalTime()));
            document.add(new Paragraph("Seats: " + booking.getSeatNumbers()));
            document.add(new Paragraph("Amount: ₹" + booking.getAmount()));
            document.add(new Paragraph("Payment ID: " + booking.getPaymentId()));
            document.add(new Paragraph("Status: " + booking.getStatus()));

            Image qr = Image.getInstance(generateQrImageBytes(booking.getPnr()));
            qr.scaleToFit(120, 120);
            document.add(qr);
            document.close();
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate PDF", e);
        }
        return out.toByteArray();
    }

    private byte[] generateQrImageBytes(String pnr) throws Exception {
        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix matrix = writer.encode(pnr, BarcodeFormat.QR_CODE, 200, 200);
        BufferedImage image = MatrixToImageWriter.toBufferedImage(matrix);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        javax.imageio.ImageIO.write(image, "PNG", baos);
        return baos.toByteArray();
    }
}
