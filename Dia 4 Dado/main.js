// import elements from dom
const diceImg = document.querySelector(".diceImg");
const rollButton = document.querySelector(".rollButton");
const number = document.querySelector(".number");
const diceHistory = document.querySelector(".diceHistory");
// database for the images
const diceImages = {
  1: "rsc/dice1.svg",
  2: "rsc/dice2.svg",
  3: "rsc/dice3.svg",
  4: "rsc/dice4.svg",
  5: "rsc/dice5.svg",
  6: "rsc/dice6.svg",
};
const textDice = {
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
  6: "SIX",
};
//history number count
let historyAmount = 1;

diceImg.addEventListener("animationend", () => {
  diceImg.classList.remove("imgAnimation"); // Eliminar la clase 'imgAnimation' después de la animación
});
number.addEventListener("animationend", () => {
  number.classList.remove("textAnimation"); // Eliminar la clase 'textAnimation' después de la animación
});

//create a fragment for optimized the DOM creation
const historyLog = document.createDocumentFragment();

function randomDice() {
  // random number
  let randomNumber = Math.round(Math.random() * 5 + 1);
  // creates the texts and elements
  let newDiv = document.createElement("DIV");
  let newH2 = document.createElement("H2");
  let newSpan = document.createElement("SPAN");
  let h2Text = document.createTextNode(`Roll ${historyAmount}`);
  let spanText = document.createTextNode(randomNumber);
  // nest the things inside other like, text inside elements, elements inside the div, div inside the fragment, the fragment inside the DOM element
  newH2.appendChild(h2Text);
  newSpan.appendChild(spanText);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newSpan);
  historyLog.appendChild(newDiv);
  diceHistory.appendChild(historyLog);
  historyAmount++;
  // this can be better   diceImg.src = `rsc/dice${randomNumber}.svg`;
  diceImg.src = diceImages[randomNumber];
  number.innerHTML = textDice[randomNumber];
  diceImg.classList.add("imgAnimation");
  number.classList.add("textAnimation");
  diceHistory.scrollTop = diceHistory.scrollHeight;
}
