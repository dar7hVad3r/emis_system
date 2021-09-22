package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.FacultyScheduleDao;
import com.project.entities.Faculty;
import com.project.entities.FacultySchedule;

@Service
public class FacultyScheduleServiceImpl implements FacultyScheduleService {
 
	@Autowired
	FacultyScheduleDao dao;
	
	@Override
	public FacultySchedule findByFid(int id) {
		Optional<FacultySchedule> schedule = dao.findById(id);
		return schedule.orElse(null);
	}
	
	@Override
	public List<FacultySchedule> FindAll() {
		List<FacultySchedule> shList = dao.findAll();
		return shList;
	}
	
	
	@Override
	public FacultySchedule updateSchedule (FacultySchedule schedule) {
		return dao.save(schedule);
	}
	
	@Override
	public FacultySchedule addSchedule (FacultySchedule schedule) {
		return dao.save(schedule);
	}

	@Override
	public void deleteById(int id) {
		dao.deleteById(id);
	}

	@Override
	public void deleteAll() {
		dao.deleteAll();
	}
}
