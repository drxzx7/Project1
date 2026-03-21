package com.eternity.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @PostMapping("/send")
    public Map<String, String> sendMessage(@RequestBody Map<String, String> request) {
        String userMessage = request.get("message");
        String apiKey = request.get("apiKey");
        
        Map<String, String> response = new HashMap<>();
        
        // Mock AI Logic
        if (userMessage.toLowerCase().contains("trend")) {
            response.put("reply", "Spring Boot Analysis: Strong institutional order flow detected at 73,200. Bullish bias confirmed via backend verification.");
        } else {
            response.put("reply", "Eternity AI (Spring Boot Backend) is cross-referencing global data for your query. How else can I assist?");
        }
        
        return response;
    }
}
