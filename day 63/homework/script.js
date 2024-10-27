function greet(name) {
    if (name === undefined) {
        name = "Guest"; 
    }
    console.log("Hello, " + name + "!");
}



function add_numbers(a, b) {
    if (b === undefined) {
        b = 0; 
    }
    return a + b;
}



function calculate_area(length, width) {
    if (width === undefined) {
        width = 1;
    }
    return length * width;
}




function convert_temperature(temp, scale) {
    if (scale === undefined) {
        scale = "C"; 
    }

    if (scale === "C") {
        return (temp * 9 / 5) + 32;
    } else if (scale === "F") {
        return (temp - 32) * 5 / 9;
    } else {
        return "Invalid";
    }
}






function add_to_shopping_list(item, quantity) {
    if (quantity === undefined) {
        quantity = 1; 
    }
    console.log(quantity + " " + item + "added to your shopping list.");
}





function power(base, exponent) {
    if (exponent === undefined) {
        exponent = 2;
    }
    return base ** exponent;
}


function create_message(name, greeting) {
    if (greeting === undefined) {
        greeting = "Hello";
    }
    return greeting + ", " + name + "!";
}



function apply_discount(price, discount) {
    if (discount === undefined) {
        discount = 10;
    }
    let discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}




function introduce(name, age, country) {
    if (age === undefined) {
        age = "unknown";
    }
    if (country === undefined) {
        country = "unknown";
    }
    console.log("My name is " + name + ". I am " + age + " years old from " + country + ".");
}





function calculate_price(price, tax) {
    if (tax === undefined) {
        tax = 5;
    }
    let finalPrice = price + (price * (tax / 100));
    return finalPrice;
}



function find_max(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}


function pass_or_fail(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}



function sum_of_numbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}



function count_evens(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
