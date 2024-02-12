const rangeInput = document.querySelector("#range");
const rangeOutput = document.querySelector("#rangeOutput");

const formElement = document.querySelector("form");

rangeInput.addEventListener("input", (e) => {
  rangeOutput.innerHTML = e.target.value;
})

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
})