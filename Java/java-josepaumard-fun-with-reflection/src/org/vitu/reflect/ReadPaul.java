package org.vitu.reflect;

import java.io.BufferedReader;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ReadPaul {

    public static void main(String[] args) 
	    throws InstantiationException,
	    	   IllegalAccessException,
	    	   IllegalArgumentException,
	    	   InvocationTargetException,
	    	   NoSuchMethodException,
	    	   ClassNotFoundException {

	Path path = Path.of("files/people.txt");
	Map<String, String> beanTypes = new HashMap<>();
	Map<String, Set<String>> properties = new HashMap<>();
	Map<String, String> propertyTypes = new HashMap<>();
	Map<String, String> propertyValues = new HashMap<>();
	
	try (BufferedReader reader = Files.newBufferedReader(path);) {
	    
	    String line = reader.readLine();
	    while (line != null) {
		
		if (line.startsWith("#")) {
		    line = reader.readLine();
		    continue;
		}
		
		String[] keyValuePairs = line.split("=");
		String key = keyValuePairs[0];
		String value = keyValuePairs[1];
		
		String[] keyElements = key.split("\\.");
		String bean = keyElements[0];
		 
		if (keyElements[1].equals("class")) {
		    String beanClass = value;
		    beanTypes.put(bean, beanClass);

		} else {
		    String property = keyElements[1];
		    properties.computeIfAbsent(bean, k -> new HashSet<>()).add(property);
		    if (keyElements.length == 3) {
			String propertyType = value;
			propertyTypes.put(bean + "." + property, propertyType);
		    } else {
			String propertyValue = value;
			propertyValues.put(bean + "." + property, propertyValue);
		    }
		}
		
		line = reader.readLine();
	    }
	    
	} catch (IOException e) {
	    e.printStackTrace();
	}
	
	System.out.println("\nBean types :");
	beanTypes.forEach((key, value) -> System.out.println("    " + key + " -> " + value));
	
	System.out.println("\nProperties :");
	properties.forEach((key, value) -> System.out.println("    " + key + " -> " + value));
	
	System.out.println("\nProperty types :");
	propertyTypes.forEach((key, value) -> System.out.println("    " + key + " -> " + value));
	
	System.out.println("\nProperty values :");
	propertyValues.forEach((key, value) -> System.out.println("    " + key + " -> " + value));
	
	List<Object> readObjects = new ArrayList<>();
	for (Map.Entry<String, String> typeForBean : beanTypes.entrySet()) {
	    String bean = typeForBean.getKey();
	    String beanType = typeForBean.getValue();
	    Class<?> beanClass = Class.forName(beanType);
	    Object o = beanClass.getConstructor().newInstance();
	    
	    for (String property : properties.get(bean)) {
		String type = propertyTypes.get(bean + "." + property);
		if (type.equals("int")) {
		    Class<?> typeClass = int.class;
		    String setterName = buildSetterName(property);
		    Method setter = beanClass.getDeclaredMethod(setterName, typeClass);
		    String valueAsString = propertyValues.get(bean + "." + property);
		    int value = Integer.parseInt(valueAsString);
		    setter.invoke(o, value);
		} else if (type.equals("boolean")) {
		    Class<?> typeClass = boolean.class;
		    String setterName = buildSetterName(property);
		    Method setter = beanClass.getDeclaredMethod(setterName, typeClass);
		    String valueAsString = propertyValues.get(bean + "." + property);
		    boolean value = Boolean.parseBoolean(valueAsString);
		    setter.invoke(o, value);
		} else {
		    Class<?> typeClass = Class.forName(type);
		    String setterName = buildSetterName(property);
		    Method setter = beanClass.getDeclaredMethod(setterName, typeClass);
		    String value = propertyValues.get(bean + "." + property);
    		    setter.invoke(o, value);
    		}
	    }
	    readObjects.add(o);
	}
	System.out.println("\nRead objects :");
	readObjects.forEach(System.out::println);
    }
    
    private static String buildSetterName(String nameProperty) {
	return "set" + nameProperty.substring(0, 1).toUpperCase() + nameProperty.substring(1);
    }

}
