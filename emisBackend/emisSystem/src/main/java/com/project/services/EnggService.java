package com.project.services;

import com.project.entities.Engineering;

public interface EnggService {

	Engineering getEngineeringDetails(int sid);

	Engineering save(Engineering eng);

	void delete(int sid);

}