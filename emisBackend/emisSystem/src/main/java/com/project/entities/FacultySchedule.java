package com.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "faculty_schedule")
public class FacultySchedule {
	@Id
	@Column(name = "scid")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "fid")
	private Faculty faculty;
	
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
	public FacultySchedule() {

	}
	public FacultySchedule(int id, Faculty faculty, Date sdate, Date edate, String module, String batch, String starts,
			String ends, String duration) {
		super();
		this.id = id;
		this.faculty = faculty;
		this.sdate = sdate;
		this.edate = edate;
		this.module = module;
		this.batch = batch;
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
	public void setFaculty(Faculty faculty) {
		this.faculty = faculty;
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
	 Faculty getFaculty() {
		return faculty;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "FacultySchedule [id=" + id + ", sdate=" + sdate + ", edate=" + edate
				+ ", module=" + module + ", batch=" + batch + ", starts=" + starts + ", ends=" + ends + ", duration="
				+ duration + "]";
	}
}
