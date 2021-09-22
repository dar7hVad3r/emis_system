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
@Table(name = "deploma")
public class Diploma {
	@Id
	private int sid;
	private String institute;
	private String university;
	private double marks;
	
	@Column(name = "p_year")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date passingYear; 
	
	private String marksheet;
	public Diploma() {

	}
	public Diploma(int sid, String institute, String university, double marks, Date passingYear, String marksheet) {
		super();
		this.sid = sid;
		this.institute = institute;
		this.university = university;
		this.marks = marks;
		this.passingYear = passingYear;
		this.marksheet = marksheet;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getInstitute() {
		return institute;
	}
	public void setInstitute(String institute) {
		this.institute = institute;
	}
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	public double getMarks() {
		return marks;
	}
	public void setMarks(double marks) {
		this.marks = marks;
	}
	public Date getPassingYear() {
		return passingYear;
	}
	public void setPassingYear(Date passingYear) {
		this.passingYear = passingYear;
	}
	public String getMarksheet() {
		return marksheet;
	}
	public void setMarksheet(String marksheet) {
		this.marksheet = marksheet;
	}
	@Override
	public String toString() {
		return "Deplome [sid=" + sid + ", institute=" + institute + ", university=" + university + ", marks=" + marks
				+ ", passingYear=" + passingYear + ", marksheet=" + marksheet + "]";
	}
	
}
