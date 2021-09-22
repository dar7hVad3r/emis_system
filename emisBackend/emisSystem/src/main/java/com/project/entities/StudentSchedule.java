package com.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "student_schedule")
public class StudentSchedule {
	@Id
	@Column(name = "shid")
	private int id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date sdate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date edate;
	
	private String module;
	private String starts;
	private String ends;
	private String duration;
	
	public StudentSchedule() {

	}

	public StudentSchedule(int id, Date sdate, Date edate, String module, String starts, String ends, String duration) {
		this.id = id;
		this.sdate = sdate;
		this.edate = edate;
		this.module = module;
		this.starts = starts;
		this.ends = ends;
		this.duration = duration;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
		return "StudentSchedule [id=" + id + ", sdate=" + sdate + ", edate=" + edate + ", module=" + module
				+ ", starts=" + starts + ", ends=" + ends + ", duration=" + duration + "]";
	}
	
}
