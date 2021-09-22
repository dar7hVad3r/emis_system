package com.project.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.StudentMarks;


public interface MarksDao extends JpaRepository<StudentMarks, Integer> {
//	public List<String> findDistinctSubject();
}
