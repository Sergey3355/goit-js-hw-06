const inputFont = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inputFont.addEventListener("input", (event) => {
  let inputEl = event.currentTarget;
  console.log("input value: ", inputEl.value);
  spanText.style.fontSize = inputEl.value + "px";
});
