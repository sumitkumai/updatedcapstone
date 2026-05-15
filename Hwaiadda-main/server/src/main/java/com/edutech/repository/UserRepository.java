package com.edutech.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edutech.entity.Role;
import com.edutech.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    Optional<User> findByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    List<User> findByRole(Role role);
}
