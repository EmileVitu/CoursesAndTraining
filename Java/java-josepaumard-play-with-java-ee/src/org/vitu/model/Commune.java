package org.vitu.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@NamedQueries({
	@NamedQuery(
		name = "Commune.byPopulationMin",
		query = "select c.nom, c.population from Commune c where c.population > :pop_min"
	)
})
@Entity(name = "Commune")
@Table(name = "commune")
@XmlRootElement
@XmlType(propOrder = {"nom", "population"})
@XmlAccessorType(XmlAccessType.FIELD)
public class Commune implements Serializable {

	@Id @Column(length = 8)
	@XmlAttribute(name = "code-postal")
	private String codePostal;
	
	@Column(length = 80)
	@XmlElement
	private String nom;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@XmlTransient
	private Maire maire;
	
	@ManyToOne()
	@XmlTransient
	private Departement departement;
	
	private int population;
	
	public Commune() {
	}

	public Commune(String codePostal, String nom, int population) {
		this.codePostal = codePostal;
		this.nom = nom;
		this.population = population;
	}

	public String getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Maire getMaire() {
		return maire;
	}

	public void setMaire(Maire maire) {
		this.maire = maire;
	}

	public Departement getDepartement() {
		return departement;
	}

	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	public int getPopulation() {
		return population;
	}

	public void setPopulation(int population) {
		this.population = population;
	}

	@Override
	public String toString() {
		return "Commune [codePostal=" + codePostal + ", nom=" + nom + ", maire=" + maire + ", departement="
				+ departement + ", population=" + population + "]";
	}
}
