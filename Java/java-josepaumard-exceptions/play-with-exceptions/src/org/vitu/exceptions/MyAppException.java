package org.vitu.exceptions;

public class MyAppException extends Exception { // RunTimeException { --> Ceci est une UncheckedException, pour laquelle nous n'avons pas besoin de gérer l'exception
	
	// Puisque MyAppException étends Exception, cela en fait une 'checked Exception'
	
	// Nous gardons le constructeur vide car c'est important de le faire pour les exceptions
	public MyAppException() {
	}
	
	public MyAppException(String message) {
		// Tout code avant le constructeur (ici) ne fonctionnera pas
		super(message);
	}
	// Si nous n'avons pas message, nous aurons deux constructeurs, un vide, et un autre qui prends un message en paramètre
	// Utiliser super() nous permet d'appeler le constructeur de la classe que nous étendons qui prends une chaîne de caractères en paramètres
	// En faisant ctrl + clic gauche sur le mot clef super(), cela nous renvoies vers la méthode qui est appelée par super(), ici, Exception
	// Il y a deux règles pour le super(), nous ne pouvons pas en avoir deux par constructeur, et nous ne pouvons rien écrire avant le super
}
