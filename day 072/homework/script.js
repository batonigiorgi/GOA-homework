function showMessage() {
    setTimeout(() => {
        console.log("3 seconds");
    }, 3000);
}

showMessage();



setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    console.log(timeString);
}, 1000);


const paragraphs = document.querySelectorAll('p');
let paragraphIndex = 0;

setInterval(() => {
    paragraphs[paragraphIndex].textContent = `ახალი ტექსტი: ${Math.random()}`;
    paragraphIndex = (paragraphIndex + 1) % paragraphs.length;
}, 5000);
