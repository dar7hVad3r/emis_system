package com.project.controllers;

import java.util.HashMap;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Diploma;
import com.project.entities.Engineering;
import com.project.entities.Tenth;
import com.project.entities.Twelfth;
import com.project.services.DiplomaService;
import com.project.services.EnggService;
import com.project.services.TenthService;
import com.project.services.TwelfthService;

@CrossOrigin
@RequestMapping("/academic")
@RestController
public class AcademicDetailsController {
	@Autowired
	TenthService tenthService;
	@Autowired
	TwelfthService twelfthService;
	@Autowired
	DiplomaService diplService;
	@Autowired
	EnggService engService;
	
	@GetMapping("{id}")
	public ResponseEntity<Map<String, Object>> getAcademicDetails(@PathVariable int id) {
		Map<String, Object> result = new HashMap<String, Object>();
		Tenth tenth = tenthService.getTenthDetails(id);
		Twelfth twelfth = twelfthService.getTwelfthDetails(id);
		Diploma diploma = diplService.getDeplomaDetails(id);
		Engineering engg = engService.getEngineeringDetails(id);
		result.put("status", "success");
		result.put("tenth", tenth);
		result.put("twelfth", twelfth);
		result.put("diploma", diploma);
		result.put("engg", engg);
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/tenth")
	public Map<String, String> saveTenthDetails(@RequestBody Tenth t) {
		Tenth details = tenthService.saveTenthDetails(t);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", details == null ? "error" : "success");
		return result;
	}
	
	@PostMapping("/twelfth")
	public Map<String, String> saveTwelfthDetails(@RequestBody Twelfth t) {
		Twelfth details = twelfthService.saveTwelfthDetails(t);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", details == null ? "error" : "success");
		return result;
	}		
	
	@PostMapping("/diploma")
	public Map<String, String> saveDiplomaDetails(@RequestBody Diploma d) {
		Diploma details = diplService.saveDiplomaDetails(d);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", details == null ? "error" : "success");
		return result;
	}
	
	@PostMapping("/engg")
	public Map<String, String> saveEngineeringDetails(@RequestBody Engineering e) {
		Engineering details = engService.save(e);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", details == null ? "error" : "success");
		return result;
	}
}











