function decideWinner(user, computer) {
  if (user === computer) return "ფრე";
  if (rules[user] === computer) return "თქვენ მოიგეთ";
  return "თქვენ წააგეთ";
}




const choices = ["ჭა", "ფურცელი", "მაკრატელი"];
const rules = {
  "ჭა": "მაკრატელი",
  "ფურცელი": "ჭა",
  "მაკრატელი": "ფურცელი"
};

const resultElement = document.getElementById("game-result");
const historyList = document.getElementById("game-history");
const historyTabButton = document.querySelector(".toggle-tab-btn");
const historyContent = document.querySelector(".history-content");

document.querySelectorAll(".choice-btn").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = decideWinner(userChoice, computerChoice);

    resultElement.textContent = `თქვენ აირჩიეთ: ${userChoice} კომპიუტერმა აირჩია: ${computerChoice}. ${result}`;
    addHistory(userChoice, computerChoice, result);
  });
});

historyTabButton.addEventListener("click", () => {
  historyContent.style.display = historyContent.style.display === "none" ? "block" : "none";
});


function addHistory(user, computer, result) {
  const listItem = document.createElement("li");
  listItem.textContent = `თქვენ: ${user} კომპიუტერის : ${computer} → ${result}`;
  listItem.className = result === "თქვენ მოიგეთ" ? "win" : "lose";
  historyList.appendChild(listItem);
}
