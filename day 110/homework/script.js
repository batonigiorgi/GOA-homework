class Animal {
    constructor(name, species, age) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  
    makeSound() {
      return `${this.name} makes a sound`;
    }
  }
  
  class Vehicle {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      return `${this.brand} ${this.model} engine started`;
    }
  }
  
  class Human {
    constructor(name, age, profession) {
      this.name = name;
      this.age = age;
      this.profession = profession;
    }
  
    introduce() {
      return `Hi Im ${this.name} a ${this.profession}`;
    }
  }
  
  const animal1 = new Animal("Lion", "Big Cat", 5);
  const animal2 = new Animal("Eagle", "Bird", 3);
  const animal3 = new Animal("Dolphin", "Mammal", 8);
  
  const vehicle1 = new Vehicle("BMW", "E38", 1992);
  const vehicle2 = new Vehicle("Mercedes", "W140", 1998);
  const vehicle3 = new Vehicle("Ford", "Mustang", 1967);
  
  const human1 = new Human("Amad Dialo", 22, "Negro");
  const human2 = new Human("Marcus Rashford", 27, "Legend");
  const human3 = new Human("Donald j Trump", 78, "President");
  
  console.log(animal1, animal1.makeSound());
  console.log(animal2, animal2.makeSound());
  console.log(animal3, animal3.makeSound());
  
  console.log(vehicle1, vehicle1.startEngine());
  console.log(vehicle2, vehicle2.startEngine());
  console.log(vehicle3, vehicle3.startEngine());
  
  console.log(human1, human1.introduce());
  console.log(human2, human2.introduce());
  console.log(human3, human3.introduce());
  