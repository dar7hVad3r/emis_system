package com.project.model;

import org.springframework.beans.BeanUtils;

import com.project.entities.StudentMarks;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

public class MarksDTO {
	private String subject;
	private int theory;
	private int internal;
	private int lab;
	private int outof;
	public MarksDTO() {
	}
	public MarksDTO(String subject, int theory, int internal, int lab, int outof) {
		super();
		this.subject = subject;
		this.theory = theory;
		this.internal = internal;
		this.lab = lab;
		this.outof = outof;
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
		return "MarksDTO [subject=" + subject + ", theory=" + theory + ", internal=" + internal + ", lab=" + lab
				+ ", outof=" + outof + "]";
	}
}	
