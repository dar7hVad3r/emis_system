package com.project.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.StudentDao;
import com.project.entities.Student;
import com.project.model.Credentials;

@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	StudentDao dao;

	@Override
	public Student findById(int id) {
		Optional<Student> student = dao.findById(id);
		return student.orElse(null);
	}

	@Override
	public Student findByEmail(String email) {
		Optional<Student> student = dao.findByEmail(email);
		return student.orElse(null);
	}

	@Override
	public Student addStudent(Student student) {
		return dao.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		return dao.save(student);
	}

	@Override
	public List<Student> findAll() {
		return dao.findAll();
	}
	@Override
	public void delete(int id) {
		Student student = findById(id);
		if ( student != null)
			dao.delete(student);
	}
	
	@Override
	public Map<String, Object> authenticate(Credentials cred) {
		Map<String, Object> result = new HashMap<String, Object>();
		Student student = findByEmail(cred.getEmail());
		if ( student.getPassword().equals(cred.getPassword()) ) {
			result.put("status", "success");
			result.put("data", student);
		}
		else {
			result.put("status", "error");
			result.put("data", null);
		}
		return result;
	}
}
