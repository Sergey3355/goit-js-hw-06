const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
  let inputEl = event.currentTarget;

  if (inputEl.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
