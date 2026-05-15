package com.edutech.config;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.edutech.util.JwtRequestFilter;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors()
            .and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
                .antMatchers(HttpMethod.POST,
                        "/api/auth/register",
                        "/api/auth/verify-otp",
                        "/api/auth/login",
                        "/api/auth/forgot-password",
                        "/api/auth/reset-password").permitAll()
                .antMatchers(HttpMethod.POST, "/api/flights").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/flights/**").hasAuthority("ADMIN")
                .antMatchers("/api/booking/bookingList", "/api/admin/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.POST, "/api/pilot/schedule/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/pilot/schedule/**").hasAnyAuthority("ADMIN", "PILOT")
                .antMatchers("/api/**").authenticated()
            .and()
            .exceptionHandling()
                .authenticationEntryPoint((req, res, ex) -> {
                    res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    res.setContentType(MediaType.APPLICATION_JSON_VALUE);
                    new ObjectMapper().writeValue(res.getOutputStream(),
                            Collections.singletonMap("message", "Unauthorized"));
                })
            .and()
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
