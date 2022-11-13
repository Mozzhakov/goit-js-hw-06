function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const pageBody = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const currentColorSpan = document.querySelector(".color");

const changeColorFn = () => {
  const randomColor = getRandomHexColor();
  pageBody.style.backgroundColor = randomColor;
  currentColorSpan.textContent = randomColor;
};

changeColorBtn.addEventListener("click", changeColorFn);
