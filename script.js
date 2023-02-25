let color = document.querySelector(".color");
let button = document.querySelector(".btn");

let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
let hexColor;

button.addEventListener("click", function () {
  let hexStart = "#";
  for (let i = 0; i < 6; i++) {
    hexStart += hexArray[randomNumber()];
  }
  hexColor = hexStart;
  color.textContent = hexColor;
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hexArray.length);
}
