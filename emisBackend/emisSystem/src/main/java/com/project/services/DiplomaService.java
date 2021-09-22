package com.project.services;

import com.project.entities.Diploma;

public interface DiplomaService {

	Diploma getDeplomaDetails(int sid);

	Diploma saveDiplomaDetails(Diploma diplDetails);

	void delete(int sid);

}