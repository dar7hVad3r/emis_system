package com.project.services;

import com.project.entities.Tenth;

public interface TenthService {

	Tenth getTenthDetails(int sid);

	Tenth saveTenthDetails(Tenth tenthDetails);

	void deleteTenth(int sid);

}