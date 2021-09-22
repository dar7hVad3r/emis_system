package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.EnggDao;
import com.project.entities.Engineering;

@Service

public class EnggServiceImpl implements EnggService {
	@Autowired
	EnggDao dao;
	
	@Override
	public Engineering getEngineeringDetails(int sid) {
		Optional<Engineering> engg = dao.findById(sid);
		return engg.orElse(null);
	}
	
	@Override
	public Engineering save(Engineering eng) {
		Engineering engg = dao.save(eng);
		return engg;
	}

	@Override
	public void delete(int sid) {
		dao.deleteById(sid);
	}
	
}
