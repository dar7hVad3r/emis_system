package com.project.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Faculty;

import com.project.services.FacultyService;

@CrossOrigin
@RequestMapping("/faculty")
@RestController
public class FacultyController {
	@Autowired
	FacultyService service;
	
	@GetMapping("")
	public List<Faculty> getAllFaculty() {
		List<Faculty> list = service.getAll();
		return list;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getFacultyById( @PathVariable int id ) {
		Map<String, Object> result = new HashMap<String, Object>();
		Faculty faculty = service.findByFid(id);
		result.put("status", "success");
		result.put("data", faculty);
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("")
	public ResponseEntity<Map<String, Object>> addFaculty( @RequestBody Faculty fac ) {
		Faculty faculty = service.save(fac);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", faculty);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, String>> deleteFaculty( @PathVariable int id ) {
		service.delete(id);
		Map<String , String> result = new HashMap<String, String>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
	
}
