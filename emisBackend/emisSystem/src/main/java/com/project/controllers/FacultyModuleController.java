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
import com.project.entities.FacultyModule;
import com.project.services.FacultyModuleServiceImpl;
import com.project.services.FacultyService;

@CrossOrigin
@RequestMapping("/module")
@RestController
public class FacultyModuleController {
	
	@Autowired
	FacultyModuleServiceImpl service;
	@Autowired
	FacultyService facService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getModuleById( @PathVariable int id ) {
		Faculty faculty = facService.findByFid(id);
		List<FacultyModule> modules = faculty.getModules();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", modules);
		return ResponseEntity.ok(result);
	}
	@PostMapping("/{id}")
	public ResponseEntity<Map<String, Object>> addModule( @RequestBody FacultyModule mod, @PathVariable int id ) {
		Faculty faculty = facService.findByFid(id);
		
		mod.setFaculty(faculty);
		Map<String, Object> result = new HashMap<String, Object>();
		FacultyModule module = service.addModule(mod);
		result.put("status", "success");
		result.put("data", module);
		System.out.println(mod);
		return ResponseEntity.ok(result);
	}
	@DeleteMapping("")
	public ResponseEntity<Map<String, Object>> clear() {
		service.clear();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
}
