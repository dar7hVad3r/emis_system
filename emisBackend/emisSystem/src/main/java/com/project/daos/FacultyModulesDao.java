package com.project.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Faculty;
import com.project.entities.FacultyModule;

public interface FacultyModulesDao extends JpaRepository<FacultyModule, Integer> {
	public Optional<FacultyModule> findByid(int id);
	public FacultyModule save(FacultyModule module);
	public void deleteById(int id);
}
