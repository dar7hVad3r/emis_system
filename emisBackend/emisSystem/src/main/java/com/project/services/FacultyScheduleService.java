package com.project.services;

import java.util.List;

import com.project.entities.FacultySchedule;

public interface FacultyScheduleService {

	FacultySchedule findByFid(int id);

	FacultySchedule updateSchedule(FacultySchedule schedule);

	FacultySchedule addSchedule(FacultySchedule schedule);
	
	void deleteById(int id);

	List<FacultySchedule> FindAll();
	
	void deleteAll();

}