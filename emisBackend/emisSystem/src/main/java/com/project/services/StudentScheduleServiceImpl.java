package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.StudentScheduleDao;
import com.project.entities.StudentSchedule;

@Service
public class StudentScheduleServiceImpl implements StudentScheduleService {
	@Autowired
	StudentScheduleDao dao;
	
	@Override
	public List<StudentSchedule> getSchedule() {
		List<StudentSchedule> schedule = dao.findAll();
		if ( schedule != null ) return schedule;
		return null;
	}
	
	@Override
	public void clearAll() {
		dao.deleteAll();
	}
	
	@Override
	public String addSchedule( StudentSchedule schedule ) {
		dao.save(schedule);
		if (dao.findAll() != null) return "success";
		return "error";
	}
}
