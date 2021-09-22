package com.project.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Announcement;
import com.project.services.AnnouncementService;

@CrossOrigin
@RequestMapping("/announcement")
@RestController
public class AnnouncementController {
	@Autowired
	AnnouncementService service;
	
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getAnnouncement() {
		List<Announcement> announcements = service.getAll();
		Announcement ann = new Announcement("No Announcement Yet");
		if ( announcements.size() > 0 )
			ann = announcements.get(announcements.size()-1);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", ann);
		return ResponseEntity.ok(result);
	}
	@PostMapping("")
	public Map<String, String> addAnnouncement(@RequestBody Announcement announcement) {
		service.addAnnouncement(announcement);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", "success");
		return result;
	}
}
