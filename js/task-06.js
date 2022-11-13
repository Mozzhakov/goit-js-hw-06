const input = document.querySelector("#validation-input");
const correctLength = input.dataset.length;

const inputCheck = (event) => {
  console.log(Number(correctLength));
  console.log(event.currentTarget.dataset.length);

  if (event.currentTarget.value.length === Number(correctLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", inputCheck);
