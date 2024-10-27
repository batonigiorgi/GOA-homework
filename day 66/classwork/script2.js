let numbersList = [];
for (let i = 1; i <= 30; i++) {
    numbersList.push(i);
}

console.log("All Numbers:", numbersList);

for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) {
        evenNumbersList.push(numbersList[i]);
    }
}

console.log("Even Numbers:", evenNumbersList);
