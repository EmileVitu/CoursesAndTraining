package org.vitu.files;

import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import org.vitu.files.model.Person;

public class PersonOutputStream implements AutoCloseable {
    
    private OutputStream outputStream;

    public PersonOutputStream(OutputStream outputStream) {
	this.outputStream = outputStream;
    }
    
    public void writeFields(List<Person> people) {
	people.stream()
		.map(this::personToBytes)
		.forEach(this::writeBytes);
    }
    
    private byte[] personToBytes(Person person) {
	byte[] bytes = null;
	try (ByteArrayOutputStream bos = new ByteArrayOutputStream();
		DataOutputStream dos = new DataOutputStream(bos);) {
	    
	    // Ecrire deux String.
	    dos.writeUTF(person.getName());
	    dos.writeUTF(person.getCity());
	    dos.flush();
	    // Ecrire un int.
	    dos.write(person.getAge());
	    dos.flush();
	    bos.flush();
	    // Nous récupérons le tableau de bytes final.
	    bytes = bos.toByteArray();
	    
	} catch (IOException e) {
	    e.printStackTrace();
	}
	return bytes;
    }
    
    private void writeBytes(byte[] bytes) {
	try {
	    this.outputStream.write(bytes);
	} catch (IOException e) {
	    e.printStackTrace();
	}
    }

    @Override
    public void close() throws IOException {
	this.outputStream.close();
    }
}