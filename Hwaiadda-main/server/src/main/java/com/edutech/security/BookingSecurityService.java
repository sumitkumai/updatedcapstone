package com.edutech.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.edutech.entity.Bookings;
import com.edutech.entity.Role;
import com.edutech.entity.User;
import com.edutech.repository.BookingRepository;
import com.edutech.repository.UserRepository;

@Component("bookingSecurity")
public class BookingSecurityService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    public boolean isOwner(Long bookingId, Authentication auth) {
        if (auth == null || !auth.isAuthenticated()) {
            return false;
        }
        User user = userRepository.findByUsername(auth.getName());
        if (user == null) {
            return false;
        }
        if (user.getRole() == Role.ADMIN) {
            return true;
        }
        return bookingRepository.findById(bookingId)
                .map(b -> b.getUser().getId().equals(user.getId()))
                .orElse(false);
    }

    public boolean isOwnerByUserId(Long userId, Authentication auth) {
        if (auth == null || !auth.isAuthenticated()) {
            return false;
        }
        User user = userRepository.findByUsername(auth.getName());
        if (user == null) {
            return false;
        }
        return user.getRole() == Role.ADMIN || user.getId().equals(userId);
    }
}
