package org.vitu.reflect.model;

import java.io.Serializable;
import java.util.Comparator;
import java.util.Objects;

public class Person implements Serializable, Comparable {
    
    private static final long serialVersionUID = 1L;
    private String name;
    private String city;
    private int age;
    private boolean retired;
    
    public Person() {
	name = null;
    }

    public Person(String name, String city, int age, boolean retired) {
	super();
	this.name = name;
	this.city = city;
	this.age = age;
	this.retired = retired;
    }

    public boolean isRetired() {
        return retired;
    }

    public void setRetired(boolean retired) {
        this.retired = retired;
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
    
    public void setAge(String age) {
        this.age = Integer.parseInt(age);
    }

    @Override
    public int hashCode() {
	return Objects.hash(age, city, name, retired);
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
	return age == other.age && Objects.equals(city, other.city) && Objects.equals(name, other.name)
		&& retired == other.retired;
    }

    @Override
    public String toString() {
	return "Person [name=" + name + ", city=" + city + ", age=" + age + ", retired=" + retired + "]";
    }

    @Override
    public int compareTo(Object other) {
	Comparator<Person> comparator = buildComparator();
	return comparator.compare(this, (Person) other);
    }

    private Comparator<Person> buildComparator() {
	return Comparator
		.comparing(Person::getName)
		.thenComparing(Person::getAge);
    }
}
