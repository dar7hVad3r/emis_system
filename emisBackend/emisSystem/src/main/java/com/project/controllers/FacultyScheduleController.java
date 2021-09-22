package com.project.controllers;

import java.util.ArrayList;
import java.util.Arrays;
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
import com.project.entities.FacultySchedule;
import com.project.model.ScheduleDTO;
import com.project.services.FacultyScheduleService;
import com.project.services.FacultyService;

@CrossOrigin
@RequestMapping("/schedule")
@RestController
public class FacultyScheduleController {

	@Autowired
	FacultyScheduleService scheduleService;
	@Autowired
	FacultyService facService;
	

	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getScheduleById( @PathVariable int id ) {
		Faculty fac = facService.findByFid(id);
		List<FacultySchedule> sched = fac.getSchedule();
		List<ScheduleDTO> dtoList = new ArrayList<ScheduleDTO>();
		for (FacultySchedule s : sched) {
			dtoList.add(ScheduleDTO.toSchedule(s));
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", dtoList);
		System.out.println(result);
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Map<String, Object>> addSchedule(@PathVariable int id, @RequestBody ScheduleDTO dto) {
		Faculty faculty = facService.findByFid(id);
		FacultySchedule tempSchedule = ScheduleDTO.fromDTO(dto);
		tempSchedule.setFaculty(faculty);
		System.out.println();
		scheduleService.addSchedule(tempSchedule);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("")
	public ResponseEntity<Map<String, Object>> deleteSchedule() {
		scheduleService.deleteAll();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
}
