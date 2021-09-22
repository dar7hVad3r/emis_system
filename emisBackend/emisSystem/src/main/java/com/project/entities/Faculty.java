package com.project.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "faculty")
public class Faculty {
	@Id
	private int fid;
	private String name;
	private String email;
	private String phone;
	private String designation;
	private String area;
	private String city;
	private String state;
	private String pin;
	private String password;
	private String roll;
	@OneToMany(mappedBy = "faculty",
			cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
			fetch = FetchType.LAZY)
	private List<FacultyModule> modules;
	@OneToMany(mappedBy = "faculty",
			cascade = {CascadeType.PERSIST ,CascadeType.REMOVE},
			fetch = FetchType.LAZY)
	private List<FacultySchedule> schedule;
	
	public Faculty() {

	}
	public Faculty(int fid, String name, String email, String phone, String designation, String area, String city,
			String state, String pin, String password, String roll) {
		super();
		this.fid = fid;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.designation = designation;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.password = password;
		this.roll = roll;
	}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<FacultyModule> getModules() {
		return modules;
	}
	public void setModules(List<FacultyModule> modules) {
		this.modules = modules;
	}
	public List<FacultySchedule> getSchedule() {
		return schedule;
	}
	public void setSchedule(List<FacultySchedule> schedule) {
		this.schedule = schedule;
	}
	public String getRoll() {
		return roll;
	}
	public void setRoll(String roll) {
		this.roll = roll;
	}
}
