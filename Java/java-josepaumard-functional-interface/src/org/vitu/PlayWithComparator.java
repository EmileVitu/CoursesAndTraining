package org.vitu;

import java.util.function.Function;

import org.vitu.function.Comparator;
import org.vitu.model.User;

public class PlayWithComparator {

	public static void main(String[] args) {
		
		User kylian = new User("Kylian", 20);
		User ngolo = new User("NGolo", 28);
		User blaise = new User("Blaise", 32);
		User frereDeBlaise = new User("Blaise", 28);
		
		Function<User, String> getName = user -> user.getName();
		Function<User, Integer> getAge = user -> user.getAge();
		
//		Comparator<User> cmp = (u1, u2) -> {
//			String name1 = u1.getName();
//			String name2 = u2.getName();
//			return name1.compareTo(name2);
//		};
		
//		Comparator<User> cmpName = Comparator.comparing(getName);
//		Comparator<User> cmpAge = Comparator.comparing(getAge);
//		
//		Comparator<User> cmp = cmpName.thenComparing(cmpAge);
		
		Comparator<User> cmp = Comparator.comparing(getName).thenComparing(getAge);
		
		System.out.println("Kylian < NGolo : " + (cmp.compare(kylian, ngolo) < 0));
		System.out.println("Blaise < NGolo : " + (cmp.compare(blaise, ngolo) < 0));
		System.out.println("Frère de Blaise < Blaise : " + (cmp.compare(frereDeBlaise, blaise) < 0));
		
	}

}
