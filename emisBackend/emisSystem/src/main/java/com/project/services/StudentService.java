package com.project.services;

import java.util.List;
import java.util.Map;

import com.project.entities.Student;
import com.project.model.Credentials;

public interface StudentService {

	Student findById(int id);

	Student findByEmail(String email);

	Student addStudent(Student student);

	Student updateStudent(Student student);

	List<Student> findAll();
	
	void delete(int id);
	
	Map<String, Object> authenticate(Credentials cred);
}