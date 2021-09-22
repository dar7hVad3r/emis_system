package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.FacultyDao;
import com.project.entities.Faculty;

@Service
public class FacultyServiceImpl implements FacultyService {
	@Autowired
	FacultyDao dao;

	@Override
	public List<Faculty> getAll() {
		List<Faculty> facultyList = dao.findAll();
		return facultyList;
	}

	@Override
	public Faculty findByEmail(String email) {
		Optional<Faculty> faculty = dao.findByEmail(email);
		return faculty.orElse(null);
	}

	@Override
	public Faculty save(Faculty fac) {
		Faculty faculty = dao.save(fac);
		return faculty;
	}

	@Override
	public Faculty findByFid(int id) {
		Optional<Faculty> faculty = dao.findById(id);
		return faculty.orElse(null);

	}

	@Override
	public void delete(int id) {
		Faculty fac = findByFid(id);
		if (fac != null)
			dao.deleteById(id);
	}

	@Override
	public Faculty update(Faculty fac) {
		Faculty f = dao.save(fac);
		return f;
	}
}
