// call the objects in the dom
const billInput = document.querySelector(".billInput");
const percentageInput = document.querySelector(".percentageInput");
const result = document.querySelector(".result");
const resultBgk = document.querySelector(".resultBgk");
const calculateButton = document.querySelector(".calculateButton");

// create funcion
function calculateTip() {
  let billAmount = parseInt(billInput.value);
  let tipPercentage = parseInt(percentageInput.value);
  let tipResult = ((billAmount * tipPercentage) / 100);
  if (tipResult != 0) {
    result.innerHTML = `$${tipResult + billAmount}`;
    resultBgk.innerHTML = `$${tipResult}`;
    result.style.visibility = "visible";
    resultBgk.style.visibility = "visible";
    result.style.opacity = "100";
    resultBgk.style.opacity = "100";
  } else {
    return;
  }
}
