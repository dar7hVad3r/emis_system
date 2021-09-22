package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Announcement;

public interface AnnouncementDao extends JpaRepository<Announcement, Integer> {
	
}
