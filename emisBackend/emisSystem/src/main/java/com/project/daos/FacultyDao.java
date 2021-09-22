package com.project.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Integer> {

	public Optional<Faculty> findByEmail(String email);
	
}
