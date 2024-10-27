function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
}



function countSheep(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}



function basicOp(operator, value1, value2) {
    switch (operator) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}



const stringToNumber = function(str) {
    return Number(str);
}
