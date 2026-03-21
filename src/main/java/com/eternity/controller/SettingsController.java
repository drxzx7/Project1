package com.eternity.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins = "*")
public class SettingsController {

    private String apiKey = "";

    @PostMapping("/api-key")
    public Map<String, String> saveApiKey(@RequestBody Map<String, String> request) {
        this.apiKey = request.get("apiKey");
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "API Key saved in Spring Boot memory");
        return response;
    }

    @GetMapping("/api-key")
    public Map<String, String> getApiKey() {
        Map<String, String> response = new HashMap<>();
        response.put("apiKey", this.apiKey);
        return response;
    }
}
