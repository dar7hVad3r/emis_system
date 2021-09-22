package com.project.services;

import com.project.entities.FacultyModule;

public interface FacultyModuleService {

	FacultyModule findByMid(int id);

	FacultyModule addModule(FacultyModule module);

	void clear();

}