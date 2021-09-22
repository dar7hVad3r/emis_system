package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.StudentSchedule;

public interface StudentScheduleDao extends JpaRepository<StudentSchedule, Integer> {

}
