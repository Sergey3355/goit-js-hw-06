const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const elevEl = document.createElement("li");
  elevEl.classList.add("item");
  elevEl.textContent = element;
  ingredientsEl.append(elevEl);
});
