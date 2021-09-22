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
@Table(name = "tenth")
public class Tenth {
	@Id
	private int sid;
	private String school;
	private String board;
	private double marks;
	
	@Column(name = "p_year")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date passingYear; 
	
	private String marksheet;
	public Tenth() {

	}
	public Tenth(int sid, String school, String board, double marks, Date passingYear, String marksheet) {
		super();
		this.sid = sid;
		this.school = school;
		this.board = board;
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
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getBoard() {
		return board;
	}
	public void setBoard(String board) {
		this.board = board;
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
		return "Tenth [sid=" + sid + ", school=" + school + ", board=" + board + ", marks=" + marks + ", passingYear="
				+ passingYear + ", marksheet=" + marksheet + "]";
	}
}
