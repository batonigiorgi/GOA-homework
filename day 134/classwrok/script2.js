function coveredNumber(cardNumber) {
    let covered = ""; 
    
    for (let i = 0; i < cardNumber.length - 4; i++) {
        covered += "*";  
    }

    covered += cardNumber.slice(-4);  
    return covered;
}

console.log(coveredNumber("1234567812345678")); 