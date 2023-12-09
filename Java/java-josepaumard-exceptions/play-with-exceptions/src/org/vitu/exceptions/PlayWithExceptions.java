package org.vitu.exceptions;

public class PlayWithExceptions {

	public static void main(String... args) { 	// throws MyAppException {
		// Si nous gardons 'main throws MyAppException, cela veut dire que nous ne faisons rien pour la gérer puisque main est la méthode mère
		// Nous ne pouvons pas renvoyer l'exception à une méthode mère à la méthode main, vu que c'est elle-même la méthode mère
		
		
		String information = "No information";
		
		try {
			
			information = getInformation(true);
			information += " bien reçue";
			
		} catch (MyAppException e) {
			
			// Nous imprimons le message
			System.err.println("Exception = " + e.getMessage());
			// Nous récupérons la StackTrace
			// ATTENTION : la StackTrace est générée uniquement si nous avons fait 'throw new MyAppException' !
			e.printStackTrace();
			// Tout ceci nous est imposé car MyAppException étends Exception qui est une CheckedException
			
			// La stacktrace nous imprime ceci : 
			// org.vitu.exceptions.MyAppException: Message d'erreur
			// --> D'abord, cela nous donne la classe de l'Exception qui a été jetée avec le message d'erreur (préparé dans sa classe)
			
			// at org.vitu.exceptions.PlayWithExceptions.getInformation(PlayWithExceptions.java:37)
			// --> Nous donne la classe et la méthode dans laquelle l'Exception a été jetée, plus un lien avec la ligne où l'Exception a été générée
			
			// at org.vitu.exceptions.PlayWithExceptions.main(PlayWithExceptions.java:14)
			// --> Nous dis d'où nous venions lorsque l'Exception a été jetée
			
			// --> Nous avons donc l'intégralité de l'ensemble de l'enchaînement des méthodes
		}
		// En utilisant System.err au lieu de System.out, cela imprime en erreur donc en rouge
		System.err.println("Information = " + information);
	
	}
	
	public static String getInformation(boolean error) throws MyAppException {
		// Ajouter 'throws MyAppException nous indique que cette variable là peut jeter une MyAppException
		// Dès que nous faisons ça, le JDK nous impose de gérer 'getInformation' car MyAppException est une CheckedException
		// Eclipse nous propose, soit d'ajouter une clause 'throws' (patate chaude), soit de mettre la déclaration dans un bloc try / catch
		// Nous avons un dernier warning sur 'information' nous indiquant qu'il faut initialiser la variable, donc nous le faisons. 
		if (error) {
			// Si nous passons getInformation(true), 
			// MyAppException myAppException = new MyAppException("Message d'erreur");
			// throw myAppException;
			// En faisant de cette manière là, la StackTrace nous emmène à la ligne de la création de l'Exception et non la ligne où elle a été jetée !
			// Il vaux mieux donc toujours utiliser le code suivant pour obtenir la ligne où l'Exception a été jetée dans la StackTrace :
			throw new MyAppException("Message d'erreur");
		} else {
			// En appellant getInformation(false), la méthode retourne "Une information"
			return "Une information";
		}
	}
	
}
