const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const nextSize = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.width = nextSize + "px";
    div.style.height = nextSize + "px";
    div.style.backgroundColor = getRandomHexColor();
    console.log(div);
    boxes.append(div);
  }
};

const destroyBoxes = () => {
  boxes.textContent = "";
  input.value = 0;
};

createBtn.addEventListener("click", (e) => {
  if (input.value === "") return alert("Please enter a value");
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
