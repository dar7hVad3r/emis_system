package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "faculty_modules")
public class FacultyModule {
	@Id
	@Column(name = "mid")
	private int id;

	@ManyToOne
	@JoinColumn(name = "fid")
	private Faculty faculty;

	private String name;

	@Column(name = "total_hours")
	private int duration;

	@Column(name = "completed_hours")
	private int completion;

	private String status;

	public FacultyModule() {

	}

	public FacultyModule(int id, Faculty faculty, String name, int duration, int completion, String status) {
		super();
		this.id = id;
		this.faculty = faculty;
		this.name = name;
		this.duration = duration;
		this.completion = completion;
		this.status = status;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getCompletion() {
		return completion;
	}

	public void setCompletion(int completion) {
		this.completion = completion;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "FacultyModule [id=" + id + ", faculty=" + faculty + ", name=" + name + ", duration=" + duration
				+ ", completion=" + completion + ", status=" + status + "]";
	}

}
