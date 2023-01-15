const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liEl = ingredients.map(ingredient => {
  const li = document.createElement("li");
    li.textContent = ingredient;
    list.append(li);
}).join("");

list.insertAdjacentHTML('afterbegin', liEl);

console.log(ingredients);
