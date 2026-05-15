package com.edutech.service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.edutech.entity.Flights;
import com.edutech.repository.FlightsRepository;
import com.edutech.util.InputSanitizer;

@Service
public class FlightsService {

    @Autowired
    private FlightsRepository flightsRepository;

    @Autowired
    private InputSanitizer inputSanitizer;

    @PostConstruct
    public void init() {
        // lifecycle hook for flight service warm-up
    }

    public List<Flights> getAllFlights() {
        return flightsRepository.findAll();
    }

    public Flights getFlightById(Long id) {
        return flightsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Flight not found with id: " + id));
    }

    @CacheEvict(value = "flightSearch", allEntries = true)
    public Flights saveFlight(Flights flight) {
        sanitizeFlight(flight);
        return flightsRepository.save(flight);
    }

    @CacheEvict(value = "flightSearch", allEntries = true)
    public Flights updateFlight(Long id, Flights updated) {
        Flights existing = getFlightById(id);
        sanitizeFlight(updated);
        existing.setFlight_number(updated.getFlight_number());
        existing.setFlight_name(updated.getFlight_name());
        existing.setSource(updated.getSource());
        existing.setDestination(updated.getDestination());
        existing.setDepartureDate(updated.getDepartureDate());
        existing.setDepartureTime(updated.getDepartureTime());
        existing.setArrivalTime(updated.getArrivalTime());
        existing.setTotalSeats(updated.getTotalSeats());
        existing.setAvailable_seats(updated.getAvailable_seats());
        existing.setPrice(updated.getPrice());
        existing.setStatus(updated.getStatus());
        return flightsRepository.save(existing);
    }

    @CacheEvict(value = "flightSearch", allEntries = true)
    public void updateFlightStatus(Long id, String status) {
        Flights flight = getFlightById(id);
        flight.setStatus(inputSanitizer.sanitizePlain(status));
        flightsRepository.save(flight);
    }

    @CacheEvict(value = "flightSearch", allEntries = true)
    public void deleteFlight(Long id) {
        flightsRepository.deleteById(id);
    }

    @Cacheable(value = "flightSearch", key = "#source + '-' + #destination + '-' + #date + '-' + #minPrice + '-' + #maxPrice + '-' + #sortBy")
    public List<Flights> searchFlightsAdvanced(String source, String destination, LocalDate date,
            Double minPrice, Double maxPrice, LocalTime departAfter, LocalTime departBefore,
            String sortBy) {
        String src = inputSanitizer.sanitizePlain(source);
        String dest = inputSanitizer.sanitizePlain(destination);
        List<Flights> results = flightsRepository.findBySourceAndDestinationAndDepartureDate(src, dest, date);

        return results.stream()
                .filter(f -> minPrice == null || f.getPrice() >= minPrice)
                .filter(f -> maxPrice == null || f.getPrice() <= maxPrice)
                .filter(f -> departAfter == null || !f.getDepartureTime().isBefore(departAfter))
                .filter(f -> departBefore == null || !f.getDepartureTime().isAfter(departBefore))
                .sorted(resolveComparator(sortBy))
                .collect(Collectors.toList());
    }

    private Comparator<Flights> resolveComparator(String sortBy) {
        if ("price_desc".equalsIgnoreCase(sortBy)) {
            return Comparator.comparingDouble(Flights::getPrice).reversed();
        }
        if ("duration".equalsIgnoreCase(sortBy)) {
            return Comparator.comparingLong(this::flightDurationMinutes);
        }
        if ("duration_desc".equalsIgnoreCase(sortBy)) {
            return Comparator.comparingLong(this::flightDurationMinutes).reversed();
        }
        return Comparator.comparingDouble(Flights::getPrice);
    }

    private long flightDurationMinutes(Flights f) {
        if (f.getDepartureTime() == null || f.getArrivalTime() == null) {
            return 0;
        }
        Duration d = Duration.between(f.getDepartureTime(), f.getArrivalTime());
        if (d.isNegative()) {
            d = d.plusHours(24);
        }
        return d.toMinutes();
    }

    public List<Flights> searchFlights(String source, String destination, LocalDate date) {
        return searchFlightsAdvanced(source, destination, date, null, null, null, null, "price");
    }

    public List<Flights> getSuggestionsForSource() {
        return flightsRepository.findAll();
    }

    public List<Flights> getSuggestionsForDestionation() {
        return flightsRepository.findAll();
    }

    public boolean isSeatsAvailable(Long flightId, int travelerCount) {
        Flights flight = getFlightById(flightId);
        return flight.getAvailable_seats() >= travelerCount;
    }

    private void sanitizeFlight(Flights flight) {
        flight.setSource(inputSanitizer.sanitizePlain(flight.getSource()));
        flight.setDestination(inputSanitizer.sanitizePlain(flight.getDestination()));
        flight.setFlight_name(inputSanitizer.sanitizePlain(flight.getFlight_name()));
        flight.setFlight_number(inputSanitizer.sanitizePlain(flight.getFlight_number()));
    }
}
