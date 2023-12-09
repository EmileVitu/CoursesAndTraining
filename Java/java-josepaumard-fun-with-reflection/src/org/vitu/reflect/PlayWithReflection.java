package org.vitu.reflect;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;

import org.vitu.reflect.model.Person;

public class PlayWithReflection {

    public static void main(String... args) throws NoSuchFieldException, SecurityException, NoSuchMethodException {
	
	Person person = new Person("Didier", "Paris", 35, false);
	
	// Class
	Class personClass = person.getClass();

	String name = personClass.getName();
	System.out.println("Name : " + name);
	
	Class superClass = personClass.getSuperclass();
	System.out.println("Super Class : " + superClass);
    
	Class[] interfaces = personClass.getInterfaces();
	System.out.println("Interfaces :");
	Arrays.stream(interfaces).forEach(System.out::println);
	
	
	// FIelds
	Field[] fields = personClass.getFields();
	System.out.println("Fields :");
	Arrays.stream(fields).forEach(System.out::println);
	
	Field[] declaredFields = personClass.getDeclaredFields();
	System.out.println("Declared Fields :");
	Arrays.stream(declaredFields).forEach(System.out::println);
	
	for (Field declaredField : declaredFields) {
	    System.out.println("   Field" + declaredField.getName());
	    Class<?> fieldType = declaredField.getType();
	    System.out.println("       type : " + fieldType);
	    int modifiers = declaredField.getModifiers();
	    System.out.println("       private : " + Modifier.isPrivate(modifiers));
	    System.out.println("       static : " + Modifier.isStatic(modifiers));
	    System.out.println("       final : " + Modifier.isFinal(modifiers));
	    System.out.println("       private : " + Modifier.isPrivate(modifiers));
	}
	
	
	// Methods
	Method[] methods = personClass.getMethods();
	System.out.println("Methods :");
	Arrays.stream(methods).forEach(System.out::println);
	
	Method[] declaredMethods = personClass.getDeclaredMethods();
	System.out.println("Declared methods :");
	Arrays.stream(declaredMethods).forEach(System.out::println);
	
	
	// Constructors
	Constructor[] constructors = personClass.getConstructors();
	System.out.println("\nConstructors :");
	Arrays.stream(constructors).forEach(System.out::println);
	
	Constructor[] declaredConstructors = personClass.getDeclaredConstructors();
	System.out.println("\nDeclared constructors :");
	Arrays.stream(declaredConstructors).forEach(System.out::println);
    
	
	// Field by name	
	Field nameDeclaredField = personClass.getDeclaredField("name");
	System.out.println("\nName field : " + nameDeclaredField);
		
	// Method by name	
	Method nameDeclaredMethod = personClass.getDeclaredMethod("getName");
	System.out.println("\nMethod getName : " + nameDeclaredMethod);
	
	Method ageDeclaredMethod = personClass.getDeclaredMethod("setAge", int.class);
	System.out.println("\nMethod setAge with int : " + ageDeclaredMethod);
	
	Method ageDeclaredStringMethod = personClass.getDeclaredMethod("setAge", String.class);
	System.out.println("\nMethod setAge with String : " + ageDeclaredStringMethod);
	
	
	// Constructors by name
	Constructor emptyConstructor = personClass.getConstructor();
	System.out.println("\nEmpty constructor" + emptyConstructor);
	
	Constructor constructor = personClass.getConstructor();
	System.out.println("\nEmpty constructor" + constructor);
    }
}