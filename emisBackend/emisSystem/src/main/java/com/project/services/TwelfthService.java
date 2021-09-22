package com.project.services;

import com.project.entities.Twelfth;

public interface TwelfthService {

	Twelfth getTwelfthDetails(int sid);

	Twelfth saveTwelfthDetails(Twelfth twelfthDetails);

	void deleteTwelfth(int sid);

}