package com.edutech.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edutech.entity.AuditLog;
import com.edutech.repository.AuditLogRepository;

@Service
public class AuditService {

    @Autowired
    private AuditLogRepository auditLogRepository;

    public void log(String username, String action, String details, String ipAddress) {
        AuditLog entry = new AuditLog();
        entry.setUsername(username);
        entry.setAction(action);
        entry.setDetails(details);
        entry.setIpAddress(ipAddress);
        auditLogRepository.save(entry);
    }
}
