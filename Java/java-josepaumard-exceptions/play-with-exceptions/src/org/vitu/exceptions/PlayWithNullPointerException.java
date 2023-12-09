package org.vitu.exceptions;

import org.vitu.exceptions.model.Commune;

public class PlayWithNullPointerException {

	public static void main(String[] args) {
		
		Commune commune = new Commune();
		
		int length = commune.getMaire().getAdresse().getRue().length(); 
		// --> New feature of Java 14 : NPE are more detailled for debug
		// Exception in thread "main" java.lang.NullPointerException: 
		// Cannot invoke "org.vitu.exceptions.model.Maire.getAdresse()" because the return value of "org.vitu.exceptions.model.Commune.getMaire()" is null
		// at org.vitu.exceptions.PlayWithNullPointerException.main(PlayWithNullPointerException.java:11)
		System.out.println("Length = " + length);

	}

}
