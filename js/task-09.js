function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChange = document.querySelector("body");
const spanColor = document.querySelector(".color");


colorChange.addEventListener('click', toChangeBackground);

function toChangeBackground() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  colorChange.style.backgroundColor = color;
}


