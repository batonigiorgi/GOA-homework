function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(arraySum([1, 2, 3, 4])); 




const person = {
    name: "John",
    age: 30,
    occupation: "Developer",

    greet() {
        return `Hello, my name is ${this.name}`;
    },

    work() {
        return `${this.name} is working as a ${this.occupation}`;
    },

    birthday() {
        this.age += 1;
        return `Happy birthday ${this.name}, you are now ${this.age} years old!`;
    }
};


console.log(person.greet());       
console.log(person.work());        
console.log(person.birthday());




function findShortestAndLongestWords(text) {
    const words = text.split(" ");
    let shortest = words[0];
    let longest = words[0];

    for (let word of words) {
        if (word.length < shortest.length) shortest = word;
        if (word.length > longest.length) longest = word;
    }

    return [shortest, longest];
}


console.log(findShortestAndLongestWords("My name is giorgi mindorashvili"));


