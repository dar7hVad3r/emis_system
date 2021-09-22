package com.project.services;

import java.util.List;

import com.project.entities.Faculty;

public interface FacultyService {


	Faculty findByEmail(String email);

	Faculty save(Faculty fac);
	
	Faculty update (Faculty fac);

	List<Faculty> getAll();

	Faculty findByFid(int id);
	
	void delete (int id);

}