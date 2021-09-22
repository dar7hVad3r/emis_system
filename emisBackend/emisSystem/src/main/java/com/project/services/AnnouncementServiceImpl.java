package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.AnnouncementDao;
import com.project.entities.Announcement;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {
	@Autowired
	AnnouncementDao dao;
	
	@Override
	public List<Announcement> getAll() {
		List<Announcement> announcements = dao.findAll();
		if ( announcements == null )
			return null;
		return announcements;
	}

	@Override
	public void addAnnouncement(Announcement announcement) {
		dao.save(announcement);
	}
}
