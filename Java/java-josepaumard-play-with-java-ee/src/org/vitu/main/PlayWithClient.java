package org.vitu.main;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.vitu.model.temp.User;

public class PlayWithClient {

	public static void main(String[] args) {
		
		Client client = ClientBuilder.newClient();
		
		WebTarget host = client.target("http://localhost:8080/rest");
//		WebTarget userGetPath = host.path("user/{id}");
		WebTarget userPostPath = host.path("user");
		
//		WebTarget requestGetTarget = userGetPath.resolveTemplate("id", 150);
		
		User user = new User(14, "Edinson", 47);
		Entity<User> entity = Entity.entity(user, MediaType.APPLICATION_JSON);
		
//		Response response = requestGetTarget.request().get();
		Response response = userPostPath.request().post(entity);
	
		int status = response.getStatus();
		// Object entity = response.getEntity();
		
		System.out.println("Status = " + status);
		System.out.println("Entity = " + entity);
	}
}
