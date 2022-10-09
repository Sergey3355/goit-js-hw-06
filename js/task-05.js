const nameInput = document.querySelector("#name-input");
console.log(nameInput);
const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});

// nameInput.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   if (event.currentTarget.value) {
//     nameOutput.textContent = event.currentTarget.value;
//   } else {
//     nameOutput.textContent = "Anonymous";
//   }
// }
