// Const declaration
const date = document.querySelector(".date");
const operationMade = document.querySelector(".operationMade");
const resultOperation = document.querySelector(".resultOperation");
const erase = document.querySelector(".erase");
const backspace = document.querySelector(".backspace");
const leftBracket = document.querySelector(".leftBracket");
const rightBracket = document.querySelector(".rightBracket");
const pi = document.querySelector(".pi");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const cero = document.querySelector(".cero");
const exponent = document.querySelector(".exponent");
const multiply = document.querySelector(".multiply");
const percent = document.querySelector(".percent");
const logarithm = document.querySelector(".logarithm");
const plus = document.querySelector(".plus");
const comma = document.querySelector(".comma");
const equals = document.querySelector(".equals");

//change date
let actualDate = new Date();
let options = { day: 'numeric', month: 'long', year: 'numeric' };
let formattedDate = actualDate.toLocaleDateString('en-US', options);

date.innerHTML = formattedDate;

//Calculator operations
let value = "";

// Update value function
function updateValue() {
    resultOperation.innerHTML = value;
}

// Functions for adding numbers
function addNumber(number) {
    value += number;
    updateValue();
}

// Functions for adding operators
function addOperator(operator) {
    if (value !== "") {
        value += operator;
        updateValue();
    }
}

// Event listeners for numbers
one.addEventListener("click", () => addNumber("1"));
two.addEventListener("click", () => addNumber("2"));
three.addEventListener("click", () => addNumber("3"));
four.addEventListener("click", () => addNumber("4"));
five.addEventListener("click", () => addNumber("5"));
six.addEventListener("click", () => addNumber("6"));
seven.addEventListener("click", () => addNumber("7"));
eight.addEventListener("click", () => addNumber("8"));
nine.addEventListener("click", () => addNumber("9"));
cero.addEventListener("click", () => addNumber("0"));

// Event listener for the plus operator
// Event listener for the plus operator
plus.addEventListener("click", addition => {
    let additionOp = "+";
    value += additionOp; // Añadir el símbolo de suma al valor
    updateValue(); // Actualizar la visualización
});


// Erase value
erase.addEventListener("click", eraseValue => {
    resultOperation.innerHTML = ("0");
    value = "";
});
