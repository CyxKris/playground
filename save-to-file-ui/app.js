const formElement = document.querySelector("form");

const clearButton = document.querySelector("#clear");
// const saveButton = document.querySelector("#save");

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  formElement.reset();
});

formElement.addEventListener("submit", (e) => {
  if (this.checkValidity()) {
    e.preventDefault();
  }
  e.preventDefault();
})