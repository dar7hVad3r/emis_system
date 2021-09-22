package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.DiplomaDao;
import com.project.entities.Diploma;

@Service
public class DiplomaServiceImpl implements DiplomaService {
	@Autowired
	DiplomaDao dao;

	@Override
	public Diploma getDeplomaDetails(int sid) {
		Optional<Diploma> dipl = dao.findById(sid);
		return dipl.orElse(null);
	}

	@Override
	public Diploma saveDiplomaDetails(Diploma diplDetails) {
		Diploma dipl = dao.save(diplDetails);
		return dipl;
	}

	@Override
	public void delete(int sid) {
		Diploma details = getDeplomaDetails(sid);
		if (details != null)
			dao.delete(details);
	}

}
