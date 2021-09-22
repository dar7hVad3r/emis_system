package com.project.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Faculty;
import com.project.entities.FacultySchedule;

public interface FacultyScheduleDao extends JpaRepository<FacultySchedule, Integer> {
	public Optional<FacultySchedule> findByid(int id);
	public FacultySchedule save(FacultySchedule schedule);
}
