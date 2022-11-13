const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  value.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  value.textContent = counter.counterValue;
});
