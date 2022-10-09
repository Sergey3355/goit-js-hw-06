const btnDecrement = document.querySelector("[data-action='decrement']");
console.log(btnDecrement);
const btnIncrement = document.querySelector("[data-action='increment']");
console.log(btnIncrement);
let counterValue = 0;
console.log(counterValue);

btnDecrement.addEventListener("click", (event) => {
  console.log(event.target);
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
  console.log(counterValue);
});
btnIncrement.addEventListener("click", (event) => {
  console.log(event.target);
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
  console.log(counterValue);
});
