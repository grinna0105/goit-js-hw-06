const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
    textEl.style.fontSize = this.value + "px";
    console.log(textEl.style.fontSize);
}