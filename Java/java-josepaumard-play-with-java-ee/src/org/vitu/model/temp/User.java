package org.vitu.model.temp;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder = {"age", "nom"})
public class User {
	
	@XmlAttribute(name = "id")
	private long id;
	
	private String nom;
	
	private int age;
	
	public User() {
		super();
	}

	public User(long id, String nom, int age) {
		this.id = id;
		this.nom = nom;
		this.age = age;
	}

	// @XmlAttribute(name = "id")
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", nom=" + nom + ", age=" + age + "]";
	}	
}
