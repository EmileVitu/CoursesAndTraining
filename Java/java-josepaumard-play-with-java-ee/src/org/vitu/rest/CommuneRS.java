package org.vitu.rest;

import javax.ejb.EJB;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.vitu.cdi.CommuneService;
import org.vitu.ejb.CommuneEJB;
import org.vitu.model.Commune;

@Path("commune")
public class CommuneRS {

//	@EJB
//	private CommuneEJB communeEJB;

	@Inject
	private CommuneService communeService;
	
	@GET @Path("hello-world")
	public String helloWorld() {
		return "<h1>Hello World!</h1><p>This is a REST website</p>";
	}
	
//	@GET @Path("{code-postal}")
//	public Commune commune(@PathParam("code-postal") String codePostal) {
//		return new Commune(codePostal, "Paris");
//	}
	
//	@GET @Path("{code-postal}")
//	public Response helloWorld(
//			@PathParam("code-postal") String codePostal) {
//		
//		if (codePostal.equals("0")) {
//			return Response.status(Status.BAD_REQUEST).build();
//		}
//				
//		return Response.ok("Code postal = " + codePostal).build();
//	}
	
	@GET @Path("{code-postal}")
	@Produces(MediaType.TEXT_XML)
	public Response findById(
			@PathParam("code-postal") String codePostal) {
		
		Commune commune = communeService.findById(codePostal);
		
		if (commune == null) {
			return Response.status(Status.NOT_FOUND).build();
		} else {		
			return Response
					.ok(commune)
					.build();
		}
	}
}
