package org.vitu.loader;

import java.util.ServiceLoader;

public class Main {

    public static void main(String[] args) {

	ServiceLoader<MessageService> loader = ServiceLoader.load(MessageService.class);
	
	for (MessageService messageService : loader) {
	    System.out.println(messageService.getMessage());
	}
	
    }
}