package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.FacultyModulesDao;
import com.project.entities.Faculty;
import com.project.entities.FacultyModule;

@Service
public class FacultyModuleServiceImpl implements FacultyModuleService {
	
	@Autowired
	FacultyModulesDao dao;
	@Autowired
	FacultyService facService;
	
	@Override
	public FacultyModule findByMid(int id) {
		Optional<FacultyModule> module = dao.findByid(id);
		return module.orElse(null);
	}
	
	@Override
	public FacultyModule addModule (FacultyModule module) {
		return dao.save(module);
	}
	
	@Override
	public void clear() {
		dao.deleteAll();
	}
}
