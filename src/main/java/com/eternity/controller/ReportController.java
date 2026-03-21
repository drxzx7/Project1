package com.eternity.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/report")
@CrossOrigin(origins = "*")
public class ReportController {

    @GetMapping("/data")
    public Map<String, Object> getReportData() {
        Map<String, Object> data = new HashMap<>();
        data.put("title", "Institutional Stock Analysis Report");
        data.put("generatedAt", new java.util.Date().toString());
        data.put("sentiment", "BULLISH");
        data.put("confidence", "94% (Expert Verified)");
        
        // Data for charts
        data.put("barData", Arrays.asList(45, 60, 85, 30, 75));
        data.put("pieData", Arrays.asList(40, 30, 20, 10));
        data.put("linearData", Arrays.asList(72000, 72500, 73000, 72800, 73200));
        
        return data;
    }
}
