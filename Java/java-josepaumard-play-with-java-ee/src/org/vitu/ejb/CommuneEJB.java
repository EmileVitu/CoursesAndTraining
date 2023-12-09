package org.vitu.ejb;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.vitu.model.Commune;

@Stateless
public class CommuneEJB {
	
	@PersistenceContext(unitName = "jpa-java-ee")
	private EntityManager em;
	
	public Commune findById(String codePostal) {
		return em.find(Commune.class, codePostal);
	}
}