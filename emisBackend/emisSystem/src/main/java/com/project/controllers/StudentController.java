package com.project.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Attendance;
import com.project.entities.Student;
import com.project.entities.StudentMarks;
import com.project.entities.StudentSchedule;
import com.project.model.Credentials;
import com.project.model.MarksDTO;
import com.project.services.AttendanceService;
import com.project.services.DiplomaService;
import com.project.services.EnggService;
import com.project.services.MarksService;
import com.project.services.StudentScheduleService;
import com.project.services.StudentService;
import com.project.services.TenthService;
import com.project.services.TwelfthService;

@CrossOrigin
@RequestMapping("/students")
@RestController
public class StudentController {
	@Autowired
	StudentService service;
	@Autowired
	TenthService tenthSercice;
	@Autowired
	TwelfthService twelfthService;
	@Autowired
	DiplomaService diplService;
	@Autowired
	EnggService engService;
	@Autowired
	StudentScheduleService scheduleService;
	@Autowired
	AttendanceService attendanceService;
	@Autowired
	MarksService marksService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getStudentById( @PathVariable int id ) {
		Map<String, Object> result = new HashMap<String, Object>();
		Student student = service.findById(id);
		result.put("status", "success");
		result.put("data", student);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Student>> getAllStudents(){
		List<Student> students = service.findAll();
		return ResponseEntity.ok(students);
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<Map<String, Object>> authenticate( @RequestBody Credentials cred) {
		Map<String, Object> result = service.authenticate(cred);
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("")
	public ResponseEntity<Map<String, Object>> addStudent( @RequestBody Student stud ) {
		Map<String, Object> result = new HashMap<String, Object>();
//		StudentMarks[] list = new StudentMarks[] {};
//		List<StudentMarks> marks = new ArrayList<>();
//		stud.setMarksList(null);
		Student student = service.addStudent(stud);
		result.put("status", "success");
		result.put("data", student);
		return ResponseEntity.ok(result);
	}
	@DeleteMapping("/{id}")
	public  ResponseEntity<Map<String, String>> deleteStudent(@PathVariable int id) {
		service.delete(id);
		Map<String, String> result = new HashMap<String, String>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/marks/{id}")
	public ResponseEntity<Map<String, Object>> getMarks(@PathVariable int id) {
		Student student = service.findById(id);
		List<StudentMarks> marks = student.getMarksList();
		Map<String , Object> result = new HashMap<>();
		result.put("status", "success");
		result.put("data", marks);
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/marks/{id}")
	public ResponseEntity<String> setMarks(@PathVariable int id, @RequestBody MarksDTO marksDto) {
		Student student = service.findById(id);
		List<StudentMarks> marksList = student.getMarksList();
		StudentMarks marks = new StudentMarks(0, student, marksDto.getSubject(), 0, 0, 0, marksDto.getOutof());
		marks.setInternal(marksDto.getInternal());
		marks.setLab(marksDto.getLab());
		marks.setTheory(marksDto.getTheory());
		marksList.add(marks);
		marksService.add(marks);	
		return ResponseEntity.ok("success");
	}
	
	@GetMapping("/schedule")
	public ResponseEntity<Map<String, Object>> getSchedule() {
		List<StudentSchedule> schedule = scheduleService.getSchedule();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", schedule);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/schedule")
	public ResponseEntity<Map<String, Object>> clearSchedule() {
		scheduleService.clearAll();
		Map<String , Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/schedule")
	public ResponseEntity<Map<String, Object>> addSchedule(@RequestBody StudentSchedule schedule) {
		String status = scheduleService.addSchedule(schedule);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", status);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/attendance/{id}")
	public ResponseEntity<List<Attendance>> getAttendance(@PathVariable int id) {
		Student student = service.findById(id);
		List<Attendance> attendacne = student.getAttendance();
		return ResponseEntity.ok(attendacne);
	}
	
	@PostMapping("/attendance/{id}")
	public ResponseEntity<Map<String, Object>> saveAttendance(@PathVariable int id, @RequestBody Attendance attendance) {
		Student student = service.findById(id);
		attendance.setStudent(student);
		attendanceService.saveAttendance(attendance);
		Map<String , Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/subjects")
	public void getSubjects() {
		
	}
}
