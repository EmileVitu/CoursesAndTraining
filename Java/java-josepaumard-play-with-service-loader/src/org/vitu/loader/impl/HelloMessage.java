package org.vitu.loader.impl;

import org.vitu.loader.MessageService;

public class HelloMessage implements MessageService{

    @Override
    public String getMessage() {
	return "Hello";
    }
}