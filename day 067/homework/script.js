function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    };
}
const person1 = new Person('Giorgi', 15);
person1.introduce(); 




//2
function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;
    this.getDetails = function() {
        console.log("Title: " + this.title + ", Author: " + this.author);
    };
}

const book1 = new Book('1984', 'George Orwell');
book1.getDetails(); 

const book2 = new Book('Mystery Book');
book2.getDetails(); 

//3

function Classroom(students) {
    this.students = students;
    this.countStudents = function() {
        console.log("Number of students: " + this.students.length);
    };
}

const class1 = new Classroom(['John', 'Alice', 'Bob']);
class1.countStudents(); 

//5
function Light() {
    this.state = "off";
    this.toggle = function() {
        this.state = this.state === "off" ? "on" : "off";
        console.log("Light is " + this.state);
    };
}

const light = new Light();
light.toggle(); 
light.toggle(); 
