package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.StudentMarks;

public interface StudentMarksDao extends JpaRepository<StudentMarks, Integer> {
}
