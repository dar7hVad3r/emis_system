package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Engineering;

public interface EnggDao extends JpaRepository<Engineering, Integer> {

}
