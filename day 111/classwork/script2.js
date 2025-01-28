class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Bird extends Animal {
    constructor(name, age, wingCount) {
      super(name, age);
      this.wingCount = wingCount;
    }
  }
  
  const eagle = new Bird("Spade", 35, 2);
  console.log(eagle.name); 
  console.log(eagle.age); 
  