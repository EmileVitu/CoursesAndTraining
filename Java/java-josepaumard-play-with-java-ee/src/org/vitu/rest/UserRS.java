package org.vitu.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.vitu.model.temp.User;

@Path("user")
public class UserRS {

	@GET @Path("{id}")
	@Produces(MediaType.TEXT_XML)
	public Response findByid(@PathParam("id") long id) {
		User user = new User(id, "Ngolo", 28);	
		return Response.ok().entity(user).build();
	}
	
	@POST @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_XML)
	public Response create(
			@FormParam("name") String name,
			@FormParam("age") int age
			) {
		
		User user = new User(1L, name, age);
		
		return Response
				.status(Status.CREATED)
				.entity(user)
				.build();
	}
}
