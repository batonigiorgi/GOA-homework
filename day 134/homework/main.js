import { add } from './plus.js';
import { subtract } from './minus.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operator = document.getElementById('operator');
    const calculateBtn = document.getElementById('calculate');
    const result = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        let res;

        switch (operator.value) {
            case '+':
                res = add(a, b);
                break;
            case '-':
                res = subtract(a, b);
                break;
            case '*':
                res = multiply(a, b);
                break;
            case '/':
                res = divide(a, b);
                break;
            default:
                res = 'Invalid operation';
        }
        result.textContent = `Result: ${res}`;
    });
});
