package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.TwelfthDao;
import com.project.entities.Twelfth;

@Service
public class TwelfthServiceImpl implements TwelfthService  {
	@Autowired
	TwelfthDao dao;
	
	@Override
	public Twelfth getTwelfthDetails( int sid ) {
		 Optional<Twelfth> details = dao.findById(sid);
		return details.orElse(null);
	}
	
	@Override
	public Twelfth saveTwelfthDetails(Twelfth twelfthDetails) {
		return dao.save(twelfthDetails);
	}

	@Override
	public void deleteTwelfth(int sid) {
		Twelfth details = getTwelfthDetails(sid);
		if ( details != null )
			dao.delete(details);
	}
	
}
