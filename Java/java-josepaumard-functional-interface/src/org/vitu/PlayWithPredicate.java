package org.vitu;

import org.vitu.function.Predicate;

public class PlayWithPredicate {

	public static void main(String[] args) {
		
		Predicate<String> p1 = s -> s!= null;
		Predicate<String> p2 = s -> !s.isEmpty();
		
		Predicate<String> notP2 = p2.negate();
		
		Predicate<String> p3 = p1.and(p2);
		
		Predicate<String> p4 = p1.and(notP2);
		
		System.out.println("p3 est false pour une chaine nulle : " + p3.test(null));
		System.out.println("p3 est false opur une chaine vide : " + p3.test(""));
		System.out.println("p3 est true pour une chaine non nulle et non vide : " + p3.test("Bonjour"));
		System.out.println("p4 est true pour une chaine non nulle et vide : " + p4.test("Bonjour"));
	}

}
