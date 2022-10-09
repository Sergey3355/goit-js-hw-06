const forma = document.querySelector("form.login-form");
forma.addEventListener("submit", (event) => {
  event.preventDefault();
  let formaEl = event.currentTarget;
  let elements = formaEl.elements;
  console.log(elements);
  let email = elements.email;
  let password = elements.password;
  if (email.value == "" || password.value == "") {
    alert("Заполните поля");
  } else {
    let obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    forma.reset();
  }
});
