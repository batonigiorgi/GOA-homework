while (true) {
    const firstNumber = prompt("შეიყვანეთ პირველი რიცხვი:");
    if (firstNumber === "exit") break;
  
    const secondNumber = prompt("შეიყვანეთ მეორე რიცხვი:");
    if (secondNumber === "exit") break;
  
    const product = Number(firstNumber) * Number(secondNumber);
  
    if (!isNaN(product)) {
      alert(`რიცხვების ნამრავლი არის: ${product}`);
    } else {
      alert("გთხოვთ, შეიყვანოთ მხოლოდ რიცხვები.");
    }
  }
  
  alert("დამთავრდა");
  