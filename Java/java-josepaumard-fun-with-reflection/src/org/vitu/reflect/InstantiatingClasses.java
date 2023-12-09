package org.vitu.reflect;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import org.vitu.reflect.model.Person;

public class InstantiatingClasses {

    public static void main(String[] args) 
	    throws ClassNotFoundException,
	    	InstantiationException,
	    	IllegalAccessException,
	    	NoSuchMethodException,
	    	SecurityException,
	    	IllegalArgumentException,
	    	InvocationTargetException,
	    	NoSuchFieldException {

	String className = "org.vitu.reflect.model.Person";
	Class<?> personClass = Class.forName(className);
	System.out.println("\nClass : " + personClass);
	
	
	// Instantiation
	Person p1 = (Person) personClass.newInstance();
	System.out.println("Person = " + p1);
	
	Person p2 = (Person) personClass.getConstructor().newInstance();
	System.out.println("Person = " + p2);
	
	
	// Field
	Field cityField = personClass.getDeclaredField("city");
	System.out.println("    field city : " + cityField);
	cityField.setAccessible(true);
	
	int modifiers = cityField.getModifiers();
	boolean isPrivate = Modifier.isPrivate(modifiers);
	System.out.println("Field city is private ? " + isPrivate);
	
	cityField.set(p1, "Lyon");
	cityField.set(p2, "Paris");
	System.out.println("P1 = " + p1);
	System.out.println("P2 = " + p2);
	
	Field nameField = personClass.getDeclaredField("name");
	nameField.setAccessible(true);
	nameField.set(p1, "Olivier");
	nameField.set(p2, "Zinedine");
	System.out.println("P1 = " + p1);
	System.out.println("P2 = " + p2);
	
	Field ageField = personClass.getDeclaredField("age");
	ageField.setAccessible(true);
	ageField.set(p1, 28);
	ageField.set(p2, 54);
	System.out.println("P1 = " + p1);
	System.out.println("P2 = " + p2);
	
	
	Person p3 = new Person("Paul", "Manchester", 27, false);
	String name = (String) nameField.get(p3);
	String city = (String) cityField.get(p3);
	int age = (int) ageField.get(p3);
	System.out.println("Name : " + name);
	System.out.println("City : " + city);
	System.out.println("Age : " + age);
	
	
	// Method
	String nameProperty = "name";
	String getterName = buildGetterName(nameProperty);
	System.out.println("Getter name : " + getterName);
	Method getter = personClass.getDeclaredMethod(getterName);
	System.out.println("Get name de P1 : " + getter.invoke(p1));
	System.out.println("Get name de P2 : " + getter.invoke(p2));
	System.out.println("Get name de P3 : " + getter.invoke(p3));
	
	String setterName = buildSetterName("city");
	Method setter = personClass.getDeclaredMethod(setterName, String.class);
	setter.invoke(p1, "Nantes");
	setter.invoke(p2, "Lille");
	setter.invoke(p3, "Bordeaux");
	System.out.println("P1 : " + p1);
	System.out.println("P2 : " + p2);
	System.out.println("P3 : " + p3);
    }

    private static String buildGetterName(String nameProperty) {
	return "get" + nameProperty.substring(0, 1).toUpperCase() + nameProperty.substring(1);
    }
    
    private static String buildSetterName(String nameProperty) {
	return "set" + nameProperty.substring(0, 1).toUpperCase() + nameProperty.substring(1);
    }
}