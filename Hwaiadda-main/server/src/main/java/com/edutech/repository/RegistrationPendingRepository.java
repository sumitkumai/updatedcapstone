package com.edutech.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edutech.entity.RegistrationPending;

public interface RegistrationPendingRepository extends JpaRepository<RegistrationPending, Long> {

    Optional<RegistrationPending> findByEmail(String email);

    Optional<RegistrationPending> findByUsername(String username);

    void deleteByEmail(String email);
}
