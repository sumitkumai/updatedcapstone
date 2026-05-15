package com.edutech.util;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.edutech.entity.User;
import com.edutech.repository.UserRepository;
import com.edutech.service.AuthFlowService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    @Lazy
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    @Lazy
    private AuthFlowService authFlowService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            filterChain.doFilter(request, response);
            return;
        }

        String path = request.getRequestURI();
        if (!path.startsWith("/api") || isPublicPath(path)) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");
        String username = null;
        String token = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(token);
            } catch (Exception ignored) {
                writeUnauthorized(response, "Invalid or expired token");
                return;
            }
        }

        if (username == null) {
            writeUnauthorized(response, "Authentication required");
            return;
        }

        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                if (!jwtUtil.validateToken(token, userDetails)) {
                    writeUnauthorized(response, "Token expired");
                    return;
                }
                User user = userRepository.findByUsername(username);
                String sessionId = jwtUtil.extractSessionId(token);
                authFlowService.validateSession(user, sessionId);

                String role = jwtUtil.extractRole(token);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        Collections.singletonList(new SimpleGrantedAuthority(role)));
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (Exception ex) {
                writeUnauthorized(response, ex.getMessage());
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    private boolean isPublicPath(String path) {
        return path.startsWith("/api/auth/register")
                || path.startsWith("/api/auth/verify-otp")
                || path.startsWith("/api/auth/login")
                || path.startsWith("/api/auth/forgot-password")
                || path.startsWith("/api/auth/reset-password");
    }

    private void writeUnauthorized(HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        objectMapper.writeValue(response.getOutputStream(),
                Collections.singletonMap("message", message));
    }
}
