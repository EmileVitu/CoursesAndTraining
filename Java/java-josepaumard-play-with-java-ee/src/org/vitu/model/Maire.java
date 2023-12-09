package org.vitu.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "maire")
public class Maire implements Serializable {

	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
	@Column(nullable = false, length = 80)
	private String nom;
	
	@Column(length = 80)
	private String prenom;
	
//	@Column(length = 5)
//	@Enumerated(EnumType.STRING)
//	private Civilite civilite;
	
	@OneToOne(cascade = CascadeType.PERSIST, mappedBy = "maire")
	private Commune commune;
	
	@Temporal(TemporalType.DATE)
	private Date dateDeNaissance;

	public Maire() {
	}

	public Maire(int id, String nom, String prenom, 
			// Civilite civilite, 
			Commune commune, Date dateDeNaissance) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		// this.civilite = civilite;
		this.commune = commune;
		this.dateDeNaissance = dateDeNaissance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

//	public Civilite getCivilite() {
//		return civilite;
//	}
//
//	public void setCivilite(Civilite civilite) {
//		this.civilite = civilite;
//	}

	public Commune getCommune() {
		return commune;
	}

	public void setCommune(Commune commune) {
		this.commune = commune;
	}

	public Date getDateDeNaissance() {
		return dateDeNaissance;
	}

	public void setDateDeNaissance(Date dateDeNaissance) {
		this.dateDeNaissance = dateDeNaissance;
	}

	@Override
	public String toString() {
		return "Maire [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", commune=" + commune + ", dateDeNaissance="
				+ dateDeNaissance + "]";
	}
}
