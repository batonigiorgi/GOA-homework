let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits.length);

console.log(fruits.toString());


console.log(fruits.at(1));


console.log(fruits.join('-'));


fruits.push("fig", "grape");
console.log(fruits);
fruits.pop();
console.log(fruits);


let numbers = [10, 20, 30, 40];
numbers.shift();
console.log(numbers);


numbers.unshift(5);
console.log(numbers);


delete numbers[1];
console.log(numbers);

let moreNumbers = [50, 60];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);


let newLength = numbers.unshift(1);
console.log(newLength);


let items = ["apple", "banana", "apple", "cherry"];
console.log(items.indexOf("apple"));


console.log(items.lastIndexOf("apple"));


console.log(items.includes("banana"));


console.log(items.indexOf("pear"));


let colors = ["blue", "red", "green", "yellow"];
colors.sort();
console.log(colors);


let nums = [5, 2, 10, 1];
nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);

let letters = ["b", "a", "d", "c"];
letters.sort().reverse();
console.log(letters);


let array1 = [3, 1];
let array2 = [4, 2];
let mergedArray = array1.concat(array2).sort((a, b) => a - b);
console.log(mergedArray);
