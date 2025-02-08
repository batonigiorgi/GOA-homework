const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("plus");
const decrementBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateCounter() {
  counter.textContent = count;
  if (count > 0) {
    counter.className = "positive";
  } else if (count < 0) {
    counter.className = "negative";
  } else {
    counter.className = "neutral";
  }
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

updateCounter();
