const body = document.querySelector("body");
const buttonEl = document.querySelector("button.change-color");
const spanCol = document.querySelector("span.color");

buttonEl.addEventListener("click", (event) => {
  let randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  spanCol.textContent = randomHexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
