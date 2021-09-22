package com.project.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Faculty;
import com.project.entities.Student;
import com.project.model.Credentials;
import com.project.services.FacultyService;
import com.project.services.StudentService;

@CrossOrigin
@RequestMapping("/login")
@RestController
public class LoginController {
	@Autowired
	FacultyService facService;

	@Autowired
	StudentService studService;

	@PostMapping("")
	public ResponseEntity<?> authenticate(@RequestBody Credentials cred) {
		Student student = studService.findByEmail(cred.getEmail());
		Map<String, Object> result = new HashMap<String, Object>();
		if (student != null) {
			if (student.getPassword().equals(cred.getPassword())) {
				result.put("status", "success");
				result.put("data", student);
			} else {
				result.put("status", "error");
				result.put("data", null);
			}
		} else {
			Faculty faculty = facService.findByEmail(cred.getEmail());
			if ( faculty != null && faculty.getPassword().equals(cred.getPassword()) ) {
				result.put("status", "success");
				result.put("data", faculty);
			}else {
				result.put("status", "error");
				result.put("data", null);
			}
			
		}
		return ResponseEntity.ok(result);
	}
}
