package org.vitu.cdi.provider;

import javax.ejb.Stateless;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class EntityManagerProvider {

//	@Produces
//	@PersistenceContext(unitName = "jpa-java-ee")
	private EntityManager em;
	
}
