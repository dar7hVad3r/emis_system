package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.StudentMarksDao;

@Service
public class StudentMarksServiceImpl {
	@Autowired
	StudentMarksDao dao;
	
	public void findById(int id) {
//		dao.findBySid();
	}
}
