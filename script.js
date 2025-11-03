let clickAmount = 0;
let interval = null; 
let clickValue = 1;

updateDisplay();

function clickUp() {
  clickAmount += clickValue;
  updateDisplay();
}

function upgradeClickValue() { 
  if (clickAmount >= 10) {
   clickValue = clickValue + 1;
   clickAmount = clickAmount - 10;
   updateDisplay();
  }
}

function tryStartIncrementing() {
  if (clickAmount >= 30 && interval === null) {
    clickAmount -= 30; 
    updateDisplay();
    interval = setInterval(increment, 1000);
  }
}

function increment() {
  clickAmount++;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("count").textContent = clickAmount;
}

function playSound() {
  const audio = new Audio("duck-quack-112941.mp3");
  audio.play();
}

document.getElementById("button1").addEventListener("click", upgradeClickValue); 
document.getElementById("clicker").addEventListener("click", tryStartIncrementing);
document.getElementById("button2").addEventListener("click", clickUp);
