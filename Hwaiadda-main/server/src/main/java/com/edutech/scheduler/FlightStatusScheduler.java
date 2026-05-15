package com.edutech.scheduler;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.edutech.entity.Flights;
import com.edutech.repository.FlightsRepository;

@Component
public class FlightStatusScheduler {

    private static final Logger log = LoggerFactory.getLogger(FlightStatusScheduler.class);

    @Autowired
    private FlightsRepository flightsRepository;

    @Scheduled(cron = "0 */15 * * * *")
    @Transactional
    public void autoUpdateFlightStatus() {
        List<Flights> flights = flightsRepository.findAll();
        LocalDate today = LocalDate.now();
        LocalTime now = LocalTime.now();
        for (Flights flight : flights) {
            if (flight.getDepartureDate() == null) {
                continue;
            }
            String current = flight.getStatus() != null ? flight.getStatus() : "SCHEDULED";
            if ("CANCELLED".equals(current)) {
                continue;
            }
            if (flight.getDepartureDate().isBefore(today)) {
                flight.setStatus("COMPLETED");
            } else if (flight.getDepartureDate().equals(today) && flight.getDepartureTime() != null) {
                if (flight.getDepartureTime().isBefore(now.minusMinutes(30))) {
                    flight.setStatus("DEPARTED");
                } else if (flight.getDepartureTime().isBefore(now.plusHours(2))) {
                    flight.setStatus("BOARDING");
                } else {
                    flight.setStatus("SCHEDULED");
                }
            }
        }
        flightsRepository.saveAll(flights);
        log.debug("Flight status auto-update completed at {}", LocalDateTime.now());
    }
}
