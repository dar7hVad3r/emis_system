package com.project.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Student;

public interface StudentDao extends JpaRepository<Student, Integer> {
//	public Student findById(int id);
	public Optional<Student> findByEmail(String email);
//	public Student save(Student student);
}
