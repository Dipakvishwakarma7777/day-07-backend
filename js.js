let label = document.getElementById("timerLabel");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let hour = 0;
let minute = 25;
let second = 0;

let timerId = null;
let isRunning = false;

function updateLabel() {
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  label.innerText = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", function () {
  if (isRunning) return;
  isRunning = true;

  timerId = setInterval(function () {
    if (second === 0) {
      if (minute === 0 && hour === 0) {
        clearInterval(timerId);
        isRunning = false;
        return;
      }
      if (minute === 0) {
        hour--;
        minute = 59;
      } else {
        minute--;
      }
      second = 59;
    } else {
      second--;
    }
    updateLabel();
  }, 1000);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(timerId);
  isRunning = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  isRunning = false;
  hour = 0;
  minute = 25;
  second = 0;
  updateLabel();
});

updateLabel();
