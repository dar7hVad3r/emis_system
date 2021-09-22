package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.MarksDao;
import com.project.entities.StudentMarks;

@Service
public class MarksServiceImpl implements MarksService {
	@Autowired
	MarksDao dao;
	public void getSubjects(){
//		dao.findDistinctSubject();
	}
	
	@Override
	public void add(StudentMarks marks) {
		dao.save(marks);
	}
}
