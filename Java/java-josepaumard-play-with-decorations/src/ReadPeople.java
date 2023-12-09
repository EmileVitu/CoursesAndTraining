import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import org.vitu.files.PersonInputStream;
import org.vitu.files.model.Person;

public class ReadPeople {

    public static void main(String[] args) {
	
	try (FileInputStream fis = new FileInputStream("files/people.bin");
		PersonInputStream pis = new PersonInputStream(fis);) {
	    
	    List<Person> people = pis.readFields();

	    people.forEach(System.out::println);
	    
	} catch (IOException e) {
	    e.printStackTrace();
	}
	System.out.println("Done!");
    }
}