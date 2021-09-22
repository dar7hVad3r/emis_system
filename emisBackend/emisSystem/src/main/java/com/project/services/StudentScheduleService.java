package com.project.services;

import java.util.List;

import com.project.entities.StudentSchedule;

public interface StudentScheduleService {

	List<StudentSchedule> getSchedule();

	void clearAll();

	String addSchedule(StudentSchedule schedule);

}