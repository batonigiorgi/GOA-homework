class MathHelper {
    static power(base, exponent) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }

    static sqrt(number) {
        if (number < 0) return NaN; 
        let guess = number / 2;
        for (let i = 0; i < 10; i++) {
            guess = (guess + number / guess) / 2;
        }
        return guess;
    }
}

console.log(MathHelper.power(2, 3)); 
console.log(MathHelper.sqrt(25));
console.log(MathHelper.sqrt(2)); 
console.log(MathHelper.power(5, 4));
    