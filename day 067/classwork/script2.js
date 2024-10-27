//1
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    };
}

const person1 = new Person('Alice', 25);
person1.introduce();



//2
function Car(brand, year = 2020) {
    this.brand = brand;
    this.year = year;
    this.describe = function() {
        console.log("This is a" + this.brand + "from" + this.year);
    };
}
const car1 = new Car('Toyota', 2018);
car1.describe(); 


//3
function Library(name, books) {
    this.name = name;
    this.books = books;
    this.listBooks = function() {
        console.log(this.books);
    };
    const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
    myLibrary.listBooks();

    
}

//4
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function() {
        return this.width * this.height;
    };
}
const rect1 = new Rectangle(10, 5);
console.log(rect1.area()); 

//6

function Counter() {
    this.value = 0;
    this.increment = function() {
        this.value++;
    };
    this.getValue = function() {
        return this.value;
    };
}
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); 

