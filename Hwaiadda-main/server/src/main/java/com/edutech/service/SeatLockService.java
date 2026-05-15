package com.edutech.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edutech.entity.Seat;
import com.edutech.repository.SeatRepository;

@Service
public class SeatLockService implements org.springframework.beans.factory.DisposableBean {

    private static final Logger log = LoggerFactory.getLogger(SeatLockService.class);

    @Autowired
    private SeatRepository seatRepository;

    @Value("${seat.lock.duration-minutes:3}")
    private int lockDurationMinutes;

    @PostConstruct
    public void init() {
        log.info("SeatLockService initialized with lock duration {} minutes", lockDurationMinutes);
    }

    @PreDestroy
    public void cleanup() {
        log.info("SeatLockService shutting down - releasing resources");
    }

    @Override
    public void destroy() {
        cleanup();
    }

    @Transactional
    public void lockSeats(Long flightId, List<String> seatNumbers, Long userId) {
        List<Seat> seats = seatRepository.findByFlightIdAndSeatNumberIn(flightId, seatNumbers);
        if (seats.size() != seatNumbers.size()) {
            throw new IllegalArgumentException("One or more seats not found");
        }
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(lockDurationMinutes);
        for (Seat seat : seats) {
            if (!seat.isAvailable() && !isLockedByUser(seat, userId)) {
                throw new IllegalStateException("Seat " + seat.getSeatNumber() + " is not available");
            }
            if (seat.getLockedUntil() != null && seat.getLockedUntil().isAfter(LocalDateTime.now())
                    && seat.getLockedByUserId() != null && !seat.getLockedByUserId().equals(userId)) {
                throw new IllegalStateException("Seat " + seat.getSeatNumber() + " is locked by another user");
            }
            seat.setLockedUntil(expiry);
            seat.setLockedByUserId(userId);
        }
        seatRepository.saveAll(seats);
    }

    @Transactional
    public void releaseLocks(Long flightId, List<String> seatNumbers, Long userId) {
        List<Seat> seats = seatRepository.findByFlightIdAndSeatNumberIn(flightId, seatNumbers);
        for (Seat seat : seats) {
            if (userId.equals(seat.getLockedByUserId())) {
                seat.setLockedUntil(null);
                seat.setLockedByUserId(null);
            }
        }
        seatRepository.saveAll(seats);
    }

    @Transactional
    public void confirmSeatsBooked(Long flightId, List<String> seatNumbers) {
        List<Seat> seats = seatRepository.findByFlightIdAndSeatNumberIn(flightId, seatNumbers);
        for (Seat seat : seats) {
            seat.setAvailable(false);
            seat.setLockedUntil(null);
            seat.setLockedByUserId(null);
        }
        seatRepository.saveAll(seats);
    }

    @Scheduled(fixedRate = 60000)
    @Transactional
    public void releaseExpiredLocks() {
        List<Seat> all = seatRepository.findAll();
        LocalDateTime now = LocalDateTime.now();
        boolean changed = false;
        for (Seat seat : all) {
            if (seat.getLockedUntil() != null && seat.getLockedUntil().isBefore(now) && seat.isAvailable()) {
                seat.setLockedUntil(null);
                seat.setLockedByUserId(null);
                changed = true;
            }
        }
        if (changed) {
            seatRepository.saveAll(all);
            log.debug("Released expired seat locks");
        }
    }

    private boolean isLockedByUser(Seat seat, Long userId) {
        return seat.getLockedByUserId() != null && seat.getLockedByUserId().equals(userId)
                && seat.getLockedUntil() != null && seat.getLockedUntil().isAfter(LocalDateTime.now());
    }
}
