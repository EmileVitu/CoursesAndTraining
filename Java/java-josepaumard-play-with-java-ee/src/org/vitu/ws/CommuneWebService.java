package org.vitu.ws;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import javax.jws.WebService;

import org.vitu.ejb.CommuneEJB;
import org.vitu.model.Commune;

@WebService
public class CommuneWebService {

	@EJB
	private CommuneEJB communeEJB;
	
	@WebMethod
	public Commune findById(String codePostal) {
		return communeEJB.findById(codePostal);
	}
	
	@WebMethod
	public int add(int x, int y) {
		return x + y;
	}
}
