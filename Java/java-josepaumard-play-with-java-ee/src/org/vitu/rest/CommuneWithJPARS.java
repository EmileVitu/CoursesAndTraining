package org.vitu.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("communewithjpars")
public class CommuneWithJPARS {

	@GET @Path("hello-world")
	public String helloWorld() {
		return "<h1>Hello World!</h1><p>This is a REST website</p>";
	}
	
	@GET @Path("{code-postal}")
	public Response findById(
			@PathParam("code-postal") String codePostal) {
		
		if (codePostal.equals("0")) {
			return Response.status(Status.BAD_REQUEST).build();
		}
		
		return Response.ok("Code postal = " + codePostal).build();
	}
}
