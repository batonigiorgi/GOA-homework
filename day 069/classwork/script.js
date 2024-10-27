const fruits = ['apple', 'banana', 'cherry'];
//აბრუნებს მასივში არსებული ელემენტების რაოდენობას
console.log(fruits.length);

const fruits1 = ['apple', 'banana', 'cherry'];
//გარდაქმნის მასივს სტრიქონად და ანაწილებს ელემენტებს მძიმით.
console.log(fruits1.toString());

const fruits2 = ['apple', 'banana', 'cherry'];
//აბრუნებს მასივის ელემენტს მითითებული ინდექსით
console.log(fruits2.at(1));

const fruits3 = ['apple', 'banana'];
//ამატებს cherry მასივის ბოლოში
fruits.push('cherry');
console.log(fruits3);

const fruits4 = ['apple', 'banana', 'cherry'];
//შლის apple რომელიც არის პირველი ელემენტი
const removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits4);

const fruits5 = ['apple', 'banana'];
const moreFruits = ['cherry', 'pear'];
//აერთიანებს ორ მასივს
const combined = fruits5.concat(moreFruits);
console.log(combined);

const fruits6 = ['apple', 'banana', 'cherry'];
//ამოწმებს არის თუ არა apple მასივში.
console.log(fruits6.includes('apple'));

const fruits7 = ['apple', 'banana', 'apple'];
//პოულობს apple ბოლო ინდექსს
console.log(fruits7.lastIndexOf('apple'));

const numbers = [4, 2, 9, 1];
//ალაგებს რიცხვებს ზრდადობით
console.log(numbers.sort());

const numbers2 = [1, 2, 3, 4];
//აბრუნებს მასივის ელემენტებს საპირისპირო რიგით
console.log(numbers2.reverse());

const fruits8 = ['apple', 'banana', 'cherry'];
//იყენებს კონკრეტული ელემენტის წასაშლელად 
delete fruits8[1];
console.log(fruits8);
