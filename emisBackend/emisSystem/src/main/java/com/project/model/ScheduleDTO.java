package com.project.model;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.project.entities.FacultySchedule;

public class ScheduleDTO {
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Temporal(TemporalType.DATE)
	private Date sdate;
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Temporal(TemporalType.DATE)
	private Date edate;
	private String module;
	private String batch;
	private String starts;
	private String ends;
	private String duration;
	public ScheduleDTO() {
		// TODO Auto-generated constructor stub
	}
	public ScheduleDTO(Date sdate, Date edate, String module, String batch, String starts, String ends,
			String suration) {
		super();
		this.sdate = sdate;
		this.edate = edate;
		this.module = module;
		this.batch = batch;
		this.starts = starts;
		this.ends = ends;
		this.duration = suration;
	}
	public Date getSdate() {
		return sdate;
	}
	public void setSdate(Date sdate) {
		this.sdate = sdate;
	}
	public Date getEdate() {
		return edate;
	}
	public void setEdate(Date edate) {
		this.edate = edate;
	}
	public String getModule() {
		return module;
	}
	public void setModule(String module) {
		this.module = module;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getStarts() {
		return starts;
	}
	public void setStarts(String starts) {
		this.starts = starts;
	}
	public String getEnds() {
		return ends;
	}
	public void setEnds(String ends) {
		this.ends = ends;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "ScheduleDTO [sdate=" + sdate + ", edate=" + edate + ", module=" + module + ", batch=" + batch
				+ ", starts=" + starts + ", ends=" + ends + ", duration=" + duration + "]";
	}
	public static ScheduleDTO toSchedule(FacultySchedule s) {
		ScheduleDTO dto = new ScheduleDTO();
		dto.setBatch(s.getBatch());
		dto.setEdate(s.getEdate());
		dto.setEnds(s.getEnds());
		dto.setModule(s.getModule());
		dto.setSdate(s.getSdate());
		dto.setStarts(s.getStarts());
		dto.setDuration(s.getDuration());
		return dto;
	}
	public static FacultySchedule fromDTO(ScheduleDTO dto) {
		FacultySchedule s = new FacultySchedule();
		s.setBatch(dto.getBatch());
		s.setEdate(dto.getEdate());
		s.setEnds(dto.getEnds());
		s.setModule(dto.getModule());
		s.setSdate(dto.getSdate());
		s.setStarts(dto.getStarts());
		s.setDuration(dto.getDuration());
		return s;
	}
}
