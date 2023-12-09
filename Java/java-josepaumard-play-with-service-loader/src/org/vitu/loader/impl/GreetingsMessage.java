package org.vitu.loader.impl;

import org.vitu.loader.MessageService;

public class GreetingsMessage implements MessageService{

    @Override
    public String getMessage() {
	return "Greetings !";
    }
}