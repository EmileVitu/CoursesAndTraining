package org.vitu.files.model;

import java.io.Serializable;
import java.util.Objects;

public class Person implements Serializable {
    
    private String name;
    private String city;
    private int age;
    
    public Person() {
	super();
    }

    public Person(String name, String city, int age) {
	super();
	this.name = name;
	this.city = city;
	this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    
    @Override
    public int hashCode() {
	return Objects.hash(age, city, name);
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	Person other = (Person) obj;
	return age == other.age && Objects.equals(city, other.city) && Objects.equals(name, other.name);
    }

    @Override
    public String toString() {
	return "Person [name=" + name + ", city=" + city + ", age=" + age + "]";
    }
}