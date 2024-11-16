let isSlidIn = false;
document.getElementById("slideButton").onclick = function () {
    const box = document.getElementById("slideBox");
    box.style.left = isSlidIn ? "-150px" : "0px";
    isSlidIn = !isSlidIn;
};
