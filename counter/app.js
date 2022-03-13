// set initial count
let count = 0;

const valueElement = document.querySelector("#value");
const btnElements = document.querySelectorAll(".btn");

btnElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    } else if (style.contains("increase")) {
      count++;
    }
    if (count > 0) {
    valueElement.style.color = 'green';
    } else if (count < 0) {
    valueElement.style.color = 'red';
    } else if (count === 0) {
        valueElement.style.color = '#222';
    }
    valueElement.textContent = count;
  });
});
