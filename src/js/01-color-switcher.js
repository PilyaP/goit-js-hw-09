const bntStart = document.querySelector('[data-start]');
const bntStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
bntStop.disabled = true;
let timerId = null;

bntStart.addEventListener('click', clickButtonStart);
bntStop.addEventListener('click', clickButtonStop);
function clickButtonStart() {
  bntStart.disabled = true;
  bntStop.disabled = false;
  getRandomColor();
}
function clickButtonStop() {
    bntStart.disabled = false;
    bntStop.disabled = true;
    clearInterval(timerId);
} 
function getRandomColor() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}