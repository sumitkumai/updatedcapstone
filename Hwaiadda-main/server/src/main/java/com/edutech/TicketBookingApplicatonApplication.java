package com.edutech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TicketBookingApplicatonApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicketBookingApplicatonApplication.class, args);
		// test1;
		// System.out.println(new BCryptPasswordEncoder().encode("admin123"));

	}

}