function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create');
const btnDestroy = document.querySelector('button[data-destroy');
const divEl = document.querySelector('#boxes');


const createBoxes = amount => {
  const boxesAdd = [];
  for (let i = 0; i < amount; i++ ) {
    const newBoxes = document.createElement('div');
    newBoxes.style.width = `${30 + 10 * i}px`;
    newBoxes.style.height = `${30 + 10 * i}px`;
    newBoxes.style.background = getRandomHexColor();
    boxesAdd.push(newBoxes);
  }
  return boxesAdd;
}

const destroyBoxes = () => {
  divEl.innerHTML = '';
}


btnCreate.addEventListener('click', () => {
    let divToAdd = createBoxes(inputEl.value);
    divEl.append(...divToAdd);
    console.log(divToAdd);
})

btnDestroy.addEventListener('click', () => {
    destroyBoxes.call();
    
})