let frame = document.querySelector(".box");
let btn = document.querySelector("#btn");

let increase = document.querySelector(".btn2");
let decrease = document.querySelector(".btn3");
let reset = document.querySelector(".btn4");
let headingValue = document.querySelector(".h2");

let count = 0;
function increaseValue() {
  count++;
}

function DecreasecreaseValue() {
  count--;
}

function resetValue() {
  count = "0";
}

increase.addEventListener("click", () => {
  increaseValue();
  headingValue.textContent = count;
});

decrease.addEventListener("click", () => {
  DecreasecreaseValue();
  headingValue.textContent = count;
});

reset.addEventListener("click", () => {
  resetValue();
  headingValue.textContent = count;
});

// btn.addEventListener("click", function () {
//   let color1 = Math.floor(Math.random() * 256);
//   let color2 = Math.floor(Math.random() * 256);
//   let color3 = Math.floor(Math.random() * 256);
//   let oneColor = `${color1},${color2},${color3}`;

//   frame.style.backgroundColor = `rgb(${oneColor})`;
// });
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    count++;
    headingValue.textContent = count;
  } else if (e.key === "ArrowDown") {
    count--;
    headingValue.innerHTML = count;
  } else if (e.key.toLowerCase() === "r") {
    count = "0";
    headingValue.innerHTML = count;
  }
});
