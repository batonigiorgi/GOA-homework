let userTime = 20;
const timerElement = document.getElementById("timer");

const countdown = setInterval(function() {
    userTime--;
    timerElement.textContent = userTime + " seconds left";
    console.log(userTime, "left");

    if (userTime === 0) {
        clearInterval(countdown);
        console.log("Time is up");
        timerElement.textContent = "Time is up";
    }
}, 1000);