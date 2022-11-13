const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeChange = (input) => {
  console.log(input.currentTarget.value);
  text.style.fontSize = input.currentTarget.value + "px";
};
input.addEventListener("input", fontSizeChange);
