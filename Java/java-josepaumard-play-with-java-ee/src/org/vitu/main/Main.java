package org.vitu.main;

import java.io.File;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.vitu.model.temp.User;

public class Main {

	public static void main(String... args) throws JAXBException {
		
//		User user = new User(12, "Kylian", 19);
		
		JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
		
//		Marshaller marshaller = jaxbContext.createMarshaller();
//		marshaller.setProperty("jaxb.encoding", "utf-8");
//		marshaller.setProperty("jaxb.formatted.output", true);
//		
//		marshaller.marshal(user, new File("xml/user.xml"));
		
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		User newUser = (User) unmarshaller.unmarshal(new File("xml/user.xml"));
		System.out.println("user = " + newUser);
		System.out.println("terminé");
	}

}
