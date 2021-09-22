package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.TenthDao;
import com.project.entities.Tenth;

@Service
public class TenthServiceImpl implements TenthService {
	@Autowired
	TenthDao dao;
	
	@Override
	public Tenth getTenthDetails( int sid ) {
		Optional<Tenth> details = dao.findById(sid);
		return details.orElse(null);
	}
	
	@Override
	public Tenth saveTenthDetails(Tenth tenthDetails) {
		return dao.save(tenthDetails);
	}

	@Override
	public void deleteTenth(int sid) {
		dao.deleteById(sid);
	}
}
