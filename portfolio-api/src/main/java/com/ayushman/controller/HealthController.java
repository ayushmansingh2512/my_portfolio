package com.ayushman.controller;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class HealthController {

    /**
     * Lightweight ping endpoint — used by UptimeRobot to keep the service alive 24/7.
     * Returns minimal JSON so the response is as fast as possible.
     * UptimeRobot URL: https://your-render-url.onrender.com/ping
     */
    @GetMapping("/ping")
    public Map<String, String> ping() {
        return Map.of("pong", "ok");
    }

    /**
     * Detailed health check endpoint.
     * Returns status and current server timestamp.
     */
    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "ok",
            "timestamp", Instant.now().toString()
        );
    }
}
