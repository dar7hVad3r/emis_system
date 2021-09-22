package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "student_marks")
public class StudentMarks {
	@Id
	@Column(name = "mid")
	private int id;
	@ManyToOne
	@JoinColumn(name = "sid")
	private Student student;
	private String subject;
	private int theory;
	private int internal;
	private int lab;
	private int outof;
	public StudentMarks() {

	}
	public StudentMarks(int id, Student student, String subject, int theory, int internal, int lab, int outof) {
		super();
		this.id = id;
		this.student = student;
		this.subject = subject;
		this.theory = theory;
		this.internal = internal;
		this.lab = lab;
		this.outof = outof;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
//	public Student getStudent() {
//		return student;
//	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public int getTheory() {
		return theory;
	}
	public void setTheory(int theory) {
		this.theory = theory;
	}
	public int getInternal() {
		return internal;
	}
	public void setInternal(int internal) {
		this.internal = internal;
	}
	public int getLab() {
		return lab;
	}
	public void setLab(int lab) {
		this.lab = lab;
	}
	public int getOutof() {
		return outof;
	}
	public void setOutof(int outof) {
		this.outof = outof;
	}
	@Override
	public String toString() {
		return "StudentMarks [ subject=" + subject + ", theory=" + theory
				+ ", internal=" + internal + ", lab=" + lab + ", outof=" + outof + "]";
	}
	
}
