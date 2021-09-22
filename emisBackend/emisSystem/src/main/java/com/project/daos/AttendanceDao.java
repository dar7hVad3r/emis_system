package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Attendance;

public interface AttendanceDao extends JpaRepository<Attendance, Integer> {
	
}
