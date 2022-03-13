const btnElement = document.querySelector("#btn");
const colorElement = document.querySelector(".color");

btnElement.addEventListener("click", () => {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();
  color = `rgb(${red},${green},${blue})`;

  colorElement.textContent = color;
  document.body.style.backgroundColor = color;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255 + 1);
};
