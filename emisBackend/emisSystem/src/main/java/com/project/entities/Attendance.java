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
@Table(name = "attendance")
public class Attendance {
	@Id
	@Column(name = "aid")
	private int id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date adate;
	
	@ManyToOne
	@JoinColumn(name = "sid")
	private Student student;
	
	private String status;
	public Attendance() {

	}
	public Attendance(int id, Date adate, Student student, String status) {
		super();
		this.id = id;
		this.adate = adate;
		this.student = student;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getAdate() {
		return adate;
	}
	public void setAdate(Date adate) {
		this.adate = adate;
	}
	Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Attendance [id=" + id + ", adate=" + adate + ", student=" + student + ", status=" + status + "]";
	}
	
}
