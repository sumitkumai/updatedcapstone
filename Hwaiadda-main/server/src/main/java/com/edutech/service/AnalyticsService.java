package com.edutech.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.edutech.entity.Bookings;
import com.edutech.entity.Flights;
import com.edutech.repository.BookingRepository;
import com.edutech.repository.FlightsRepository;

@Service
public class AnalyticsService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private FlightsRepository flightsRepository;

    @PreAuthorize("hasAuthority('ADMIN')")
    public Map<String, Object> getDashboardMetrics() {
        List<Bookings> all = bookingRepository.findAll();
        List<Flights> flights = flightsRepository.findAll();

        long totalBookings = all.stream()
                .filter(b -> "CONFIRMED".equals(b.getStatus()) || b.getPaymentStatus() == Bookings.PaymentStatus.SUCCESS)
                .count();

        double revenue = all.stream()
                .filter(b -> b.getPaymentStatus() == Bookings.PaymentStatus.SUCCESS && b.getAmount() != null)
                .mapToDouble(Bookings::getAmount)
                .sum();

        Map<String, Long> routeCounts = all.stream()
                .filter(b -> b.getFlight() != null && b.getPaymentStatus() == Bookings.PaymentStatus.SUCCESS)
                .collect(Collectors.groupingBy(
                        b -> b.getFlight().getSource() + " → " + b.getFlight().getDestination(),
                        Collectors.counting()));

        List<Map<String, Object>> popularRoutes = routeCounts.entrySet().stream()
                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))
                .limit(5)
                .map(e -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("route", e.getKey());
                    m.put("bookings", e.getValue());
                    return m;
                })
                .collect(Collectors.toList());

        long cancellations = all.stream().filter(b -> "CANCELLED".equals(b.getStatus())).count();

        List<Map<String, Object>> occupancy = new ArrayList<>();
        for (Flights f : flights) {
            int booked = f.getTotalSeats() - f.getAvailable_seats();
            double rate = f.getTotalSeats() > 0 ? (booked * 100.0 / f.getTotalSeats()) : 0;
            Map<String, Object> row = new HashMap<>();
            row.put("flight", f.getFlight_number());
            row.put("occupancyRate", Math.round(rate * 10) / 10.0);
            occupancy.add(row);
        }

        Map<String, Long> cancelTrend = all.stream()
                .filter(b -> "CANCELLED".equals(b.getStatus()))
                .collect(Collectors.groupingBy(
                        b -> b.getBookingDate() != null ? b.getBookingDate().toLocalDate().toString() : "unknown",
                        Collectors.counting()));

        Map<String, Object> metrics = new LinkedHashMap<>();
        metrics.put("totalBookings", totalBookings);
        metrics.put("revenue", revenue);
        metrics.put("averageOccupancy", occupancy.stream().mapToDouble(o -> (Double) o.get("occupancyRate")).average().orElse(0));
        metrics.put("popularRoutes", popularRoutes);
        metrics.put("cancellationCount", cancellations);
        metrics.put("cancellationTrend", cancelTrend);
        metrics.put("flightOccupancy", occupancy);
        return metrics;
    }
}
