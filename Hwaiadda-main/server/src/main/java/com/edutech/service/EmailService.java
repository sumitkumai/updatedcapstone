package com.edutech.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${mail.enabled:false}")
    private boolean mailEnabled;

    @Value("${spring.mail.username:noreply@example.com}")
    private String fromEmail;

    @Value("${app.name:Airline Booking}")
    private String appName;

    @Value("${app.frontend.login-url:http://localhost:3000/login}")
    private String loginUrl;

    public void sendOtpEmail(String to, String otp) {
        String html = buildTemplate(
                "Email Verification",
                "<p>Your one-time password (OTP) is:</p>"
                        + "<h2 style=\"letter-spacing:4px;color:#0d6efd;\">" + otp + "</h2>"
                        + "<p>This code expires in 5 minutes. Do not share it with anyone.</p>");
        sendHtml(to, appName + " - Verification OTP", html);
    }

    public void sendWelcomeEmail(String to, String username) {
        String html = buildTemplate(
                "Welcome aboard!",
                "<p>Hi <strong>" + escape(username) + "</strong>,</p>"
                        + "<p>Your account has been verified successfully.</p>"
                        + "<p><a href=\"" + escape(loginUrl) + "\">Login to your account</a></p>");
        sendHtml(to, "Welcome to " + appName, html);
    }

    public void sendNotification(String to, String subject, String bodyHtml) {
        String html = buildTemplate(subject, bodyHtml);
        sendHtml(to, subject, html);
    }

    public void sendPasswordResetEmail(String to, String otp) {
        String html = buildTemplate(
                "Reset your password",
                "<p>Use this OTP to reset your password:</p>"
                        + "<h2 style=\"letter-spacing:4px;color:#dc3545;\">" + otp + "</h2>"
                        + "<p>This code expires in 10 minutes.</p>");
        sendHtml(to, appName + " - Password Reset OTP", html);
    }

    private String buildTemplate(String title, String body) {
        return "<!DOCTYPE html><html><body style=\"font-family:Arial,sans-serif;padding:24px;\">"
                + "<div style=\"max-width:520px;margin:0 auto;background:#fff;padding:24px;border-radius:8px;\">"
                + "<h2>" + escape(title) + "</h2>" + body
                + "<hr/><p style=\"color:#888;font-size:12px;\">" + escape(appName) + "</p>"
                + "</div></body></html>";
    }

    private void sendHtml(String to, String subject, String html) {
        String content = html.replace("<div", "<div").replace("</div>", "</div>");
        if (!mailEnabled || mailSender == null) {
            log.info("[EMAIL-DEV] To: {} | Subject: {} | Body: {}", to, subject, content);
            return;
        }
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(fromEmail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(content, true);
            mailSender.send(message);
        } catch (Exception e) {
            log.error("Failed to send email to {}", to, e);
            SimpleMailMessage fallback = new SimpleMailMessage();
            fallback.setFrom(fromEmail);
            fallback.setTo(to);
            fallback.setSubject(subject);
            fallback.setText(subject);
            mailSender.send(fallback);
        }
    }

    private String escape(String value) {
        if (value == null) {
            return "";
        }
        return value.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;");
    }
}
