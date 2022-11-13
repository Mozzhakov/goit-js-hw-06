const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputChange = (textInput) => {
  if (textInput.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = textInput.currentTarget.value;
  }
};

textInput.addEventListener("input", inputChange);
