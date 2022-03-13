const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnElement = document.querySelector("#btn");
const colorElement = document.querySelector(".color");

btnElement.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorElement.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
