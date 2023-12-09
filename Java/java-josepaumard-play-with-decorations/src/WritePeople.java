import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.vitu.files.PersonOutputStream;
import org.vitu.files.model.Person;

public class WritePeople {

    public static void main(String[] args) {
	
	Person p1 = new Person("Paul", "Manchester", 32);
	Person p2 = new Person("NGolo", "Chelsea", 29);
	Person p3 = new Person("Kylian", "Paris", 19);
	Person p4 = new Person("Hugo", "Tottenham", 28);
	Person p5 = new Person("Zinedine", "Chelsea", 29);
	
	List<Person> people = List.of(p1, p2, p3, p4, p5);

	try (FileOutputStream fos = new FileOutputStream("files/people.bin");
		PersonOutputStream pos = new PersonOutputStream(fos);) {
	    pos.writeFields(people);
	} catch (IOException e) {
	    e.printStackTrace();
	}
	
	System.out.println("Done");
    }
}
