package com.project.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	@Id
	@Column(name = "sid")
	private int id;
	private String name;
	private String email;
	private String phone;
	private String area;
	private String city;
	private String state;
	private String pin;
	private String password;
	private String roll;
	@OneToMany(mappedBy = "student", 
			cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
			fetch = FetchType.LAZY)
	private List<StudentMarks> marksList;
	@OneToMany(mappedBy = "student", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
	private List<Attendance> attendance;
	
	@PrimaryKeyJoinColumn
	@OneToOne(cascade = CascadeType.REMOVE)
	private Tenth tenth;
	
	@PrimaryKeyJoinColumn
	@OneToOne(cascade = CascadeType.REMOVE)
	private Twelfth twelfth;
	
	@PrimaryKeyJoinColumn
	@OneToOne(cascade = CascadeType.REMOVE)
	private Diploma diploma;
	
	@PrimaryKeyJoinColumn
	@OneToOne(cascade = CascadeType.REMOVE)
	private Engineering engineering;
	
	public Student() {

	}
	public Student(int sid, String name, String email, String phone, String area, String city, String state, String pin,
			String password, String roll) {
		this.id = sid;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.password = password;
		this.roll = roll;
	}
	public int getSid() {
		return id;
	}
	public void setSid(int id) {
		this.id = id;
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
	public String getRoll() {
		return roll;
	}
	public void setRoll(String roll) {
		this.roll = roll;
	}
	public List<StudentMarks> getMarksList() {
		return marksList;
	}
	public void setMarksList(List<StudentMarks> marksList) {
		this.marksList = marksList;
	}
	public List<Attendance> getAttendance() {
		return attendance;
	}
	public void setAttendance(List<Attendance> attendance) {
		this.attendance = attendance;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", area=" + area
				+ ", city=" + city + ", state=" + state + ", pin=" + pin + ", password=" + password + ", roll=" + roll
				+ "]";
	}
}
