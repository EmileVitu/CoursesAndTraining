package org.vitu.exceptions;

public class PlayWithMoreExceptions {

	public static void main(String[] args) {
		
		// Pour bypasser des méthodes statiques pour toutes les 3 suivantes, nous pouvons créer une instance de PlayWithMoreExceptions :
		PlayWithMoreExceptions play = new PlayWithMoreExceptions();
		
		String message = "No information";
		String information = play.start(message);// play.start(null); --> va générer une NPE, NullPointerException
		
		System.out.println("Information = " + information);

	}
	
	public String start(String message) {
		// int i = 10/0; // --> Exception in thread "main" java.lang.ArithmeticException: / by zero
		return init(message);
	}
	
	public String init(String message) {
		// int[] tab = new int[5];
		// int i = tab[10]; // --> Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 5
		return getInformation(message);
	}
	
	public String getInformation(String message) {
		int length = message.length();
		return "Une information capitale";
	}

}
