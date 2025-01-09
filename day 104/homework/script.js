// 1. Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
const numbers1 = [1, 2, 3];
const [a, b, c] = numbers1;
console.log(a, b, c); 

// 2. Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.
const user1 = { name1: "Giorgi", age1: 16 };
const { name1, age1 } = user1;
console.log(name1, age1); 

// 3. Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.
const user2 = { name: "Giorgi", age: 16 };
const { name: userName, age: userAge } = user2;
console.log(userName, userAge); 

// 4. Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.
const numbers2 = [1, 2, 3, 4, 5];
const [first1, , third] = numbers2;
console.log(first1, third); 

// 5. Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
let arr = [{name: "Giorgi"}, {name: "Nika"}]

for(let {name} of arr) {
    console.log(name)
};

// 6. Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.

// 7. Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
const numbers4 = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers4;
console.log(first, last); 

// 8. Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses
// destructuring to access object properties within the filter function.

  

// 9. Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects,
// extract properties from the objects using destructuring.
