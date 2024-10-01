function multiply() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    return num1 * num2;
}

// 2
function subtract() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    return num1 - num2;
}

// 3
function divide() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    if (num2 == 0) {
        return "Cannot divide by zero!";
    }
    return num1 / num2;
}

// 4
function fullName() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    return firstName + " " + lastName;
}

// 5
function minutesToSeconds() {
    let minutes = prompt("Enter the number of minutes:");
    return minutes * 60;
}

// 6
function rectangleArea() {
    let length = prompt("Enter the length of the rectangle:");
    let width = prompt("Enter the width of the rectangle:");
    return length * width;
}

// 7
function concatenateStrings() {
    let string1 = prompt("Enter the first string:");
    let string2 = prompt("Enter the second string:");
    return string1 + string2;
}

// 8
function power() {
    let base = prompt("Enter the base number:");
    let exponent = prompt("Enter the exponent:");
    return Math.pow(base, exponent);
}

// 9
function circumference() {
    let radius = prompt("Enter the radius of the circle:");
    return 2 * Math.PI * radius;
}

// 10
function nextNumber() {
    let number = prompt("Enter a number:");
    return parseInt(number) + 1;
}
