package com.edutech.service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.PostConstruct;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edutech.entity.Bookings;
import com.edutech.repository.BookingRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class PaymentService implements org.springframework.beans.factory.InitializingBean {

    private static final Logger log = LoggerFactory.getLogger(PaymentService.class);

    @Value("${razorpay.enabled:false}")
    private boolean razorpayEnabled;

    @Value("${razorpay.key-id:}")
    private String keyId;

    @Value("${razorpay.key-secret:}")
    private String keySecret;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    @org.springframework.context.annotation.Lazy
    private BookingService bookingService;

    private RazorpayClient razorpayClient;

    @PostConstruct
    public void postConstruct() {
        log.info("PaymentService ready. Razorpay enabled: {}", razorpayEnabled);
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        if (razorpayEnabled && keyId != null && !keyId.startsWith("rzp_test_your")) {
            razorpayClient = new RazorpayClient(keyId, keySecret);
        }
    }

    @Transactional
    public Map<String, Object> createOrder(Long bookingId) throws Exception {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new IllegalArgumentException("Booking not found"));
        if (booking.getPaymentStatus() == Bookings.PaymentStatus.SUCCESS) {
            throw new IllegalStateException("Booking already paid");
        }
        double amount = booking.getAmount() != null ? booking.getAmount() : 0;
        int amountPaise = (int) (amount * 100);

        String orderId;
        if (razorpayEnabled && razorpayClient != null) {
            JSONObject options = new JSONObject();
            options.put("amount", amountPaise);
            options.put("currency", "INR");
            options.put("receipt", "bk_" + bookingId);
            Order order = razorpayClient.orders.create(options);
            orderId = order.get("id");
        } else {
            orderId = "order_sim_" + UUID.randomUUID().toString().substring(0, 12);
            log.info("[PAYMENT-SIM] Created order {} for booking {} amount {}", orderId, bookingId, amount);
        }

        booking.setRazorpayOrderId(orderId);
        booking.setPaymentStatus(Bookings.PaymentStatus.PENDING);
        bookingRepository.save(booking);

        Map<String, Object> result = new HashMap<>();
        result.put("orderId", orderId);
        result.put("amount", amount);
        result.put("currency", "INR");
        result.put("keyId", keyId);
        result.put("bookingId", bookingId);
        result.put("simulated", !razorpayEnabled);
        return result;
    }

    @Transactional
    public Bookings verifyPayment(Long bookingId, String paymentId, String orderId, String signature) {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new IllegalArgumentException("Booking not found"));

        if (razorpayEnabled && razorpayClient != null) {
            try {
                JSONObject options = new JSONObject();
                options.put("razorpay_order_id", orderId);
                options.put("razorpay_payment_id", paymentId);
                options.put("razorpay_signature", signature);
                boolean valid = com.razorpay.Utils.verifyPaymentSignature(options, keySecret);
                if (!valid) {
                    return bookingService.markPaymentFailed(bookingId);
                }
            } catch (Exception e) {
                log.error("Payment verification failed", e);
                return bookingService.markPaymentFailed(bookingId);
            }
        } else {
            log.info("[PAYMENT-SIM] Verified payment {} for booking {}", paymentId, bookingId);
        }

        return bookingService.confirmPayment(bookingId, paymentId != null ? paymentId : "pay_sim_" + bookingId);
    }

    @Transactional
    public Map<String, Object> retryPayment(Long bookingId) throws Exception {
        Bookings booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new IllegalArgumentException("Booking not found"));
        if (booking.getPaymentStatus() == Bookings.PaymentStatus.SUCCESS) {
            throw new IllegalStateException("Payment already successful");
        }
        booking.setPaymentStatus(Bookings.PaymentStatus.PENDING);
        bookingRepository.save(booking);
        return createOrder(bookingId);
    }
}
