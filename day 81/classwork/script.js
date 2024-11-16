let pos = 0; 
const box = document.getElementById("box");

function moveBox() {
  pos += 1; 
  box.style.left = pos + "px"; 
  if (pos >= 1800) {
    clearInterval(moving); 
  }
}
const moveInterval = moving (moveBox, 2);
    