package org.vitu.reflect;

import org.vitu.reflect.model.Person;

public class GettingClassReference {
    
    public static void main(String[] args) throws ClassNotFoundException {
	
	Person p = new Person();
	
	Class<?> personClassV1 = p.getClass();
	System.out.println("Class : " + personClassV1);
	
	Class<?> personClassV2 = Person.class;
	System.out.println("\nClass : " + personClassV2);
	
	String className = "org.vitu.reflect.model.Person";
	Class<?> personClassV3 = Class.forName(className);
	System.out.println("\nClass : " + personClassV3);
	
	boolean a1 = personClassV1.equals(personClassV2);
	boolean a2 = personClassV2.equals(personClassV3);
	System.out.println("\nEgalité des classes au sens d'equals : " + a1 + " " + a2);
	
	boolean b1 = personClassV1 == personClassV2;
	boolean b2 = personClassV2 == personClassV3;
	System.out.println("\nEgalité des classes au sens de == : " + b1 + " " + b2);
    }
}