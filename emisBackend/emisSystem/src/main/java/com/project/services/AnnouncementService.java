package com.project.services;

import java.util.List;

import com.project.entities.Announcement;

public interface AnnouncementService {

	List<Announcement> getAll();
	void addAnnouncement(Announcement announcement);
}