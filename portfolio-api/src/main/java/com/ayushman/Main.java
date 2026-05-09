package com.ayushman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // This is the magic tag that initializes Spring Boot!
public class Main {

    public static void main(String[] args) {
        // This line fires up the internal web server
        SpringApplication.run(Main.class, args);
    }
}