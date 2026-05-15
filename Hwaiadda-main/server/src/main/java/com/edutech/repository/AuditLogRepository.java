package com.edutech.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edutech.entity.AuditLog;

public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
}
