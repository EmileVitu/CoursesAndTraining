package org.vitu.files;

import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.vitu.files.model.Person;

public class PersonInputStream implements AutoCloseable {
    
    private static final Person EOF = new Person("EOF", null, 0);
    
    private InputStream inputStream;

    Function<ByteArrayInputStream, Stream<Person>> bytesToPerson = this::bytesToPerson;
    
    public PersonInputStream(InputStream inputStream) {
	this.inputStream = inputStream;
    }
    
    public List<Person> readFields() {
	
	try (BufferedInputStream is = new BufferedInputStream(inputStream);) {
	    
	    byte[] bytes = is.readAllBytes();
	    
	    ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
	    
	    List<Person> people = Stream.generate(() -> bytesToPerson(bis))
		    .flatMap(stream -> stream)
		    .takeWhile(person -> isEndOfStream(person))
		    .collect(Collectors.toList());
	    
	    return people;
	    
	} catch (IOException e) {
	    e.printStackTrace();
	}
	
	
	return new ArrayList<>();
    }

    private boolean isEndOfStream(Person person) {
	return !person.equals(EOF);
    }
    
    private Stream<Person> bytesToPerson(ByteArrayInputStream bis) {
	try (DataInputStream dis = new DataInputStream(bis);) {
	
	String name = dis.readUTF();
	String city = dis.readUTF();
	
	int age = dis.readInt();
	
	return Stream.of(new Person(name, city, age));
	
	} catch (EOFException e) {
	    return Stream.of(EOF);	
	} catch (IOException e) {
	    e.printStackTrace();
	}
	return Stream.empty();
    }

    @Override
    public void close() throws IOException {
	this.inputStream.close();
    }
    
    
}