package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.AttendanceDao;
import com.project.entities.Attendance;

@Service
public class AttendanceServiceImpl implements AttendanceService {
	@Autowired
	AttendanceDao dao;
	
	@Override
	public Attendance saveAttendance(Attendance attendance) {
		Attendance att = dao.save(attendance);
		return att;
	}
}
