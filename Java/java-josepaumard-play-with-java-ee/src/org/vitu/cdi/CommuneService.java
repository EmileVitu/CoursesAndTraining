package org.vitu.cdi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.vitu.model.Commune;

public class CommuneService {
	
//	@Inject
	@PersistenceContext(unitName = "jpa-java-ee")
	private EntityManager em;
	
	public Commune findById(String codePostal) {
		return em.find(Commune.class, codePostal);
	}
}
