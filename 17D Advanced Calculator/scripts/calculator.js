// * import elements from DOM
const nOne = document.querySelector(".nOne");
const nTwo = document.querySelector(".nTwo");
const nThree = document.querySelector(".nThree");
const minusSymbol = document.querySelector(".minus");
const nFour = document.querySelector(".nFour");
const nFive = document.querySelector(".nFive");
const nSix = document.querySelector(".nSix");
const plusSymbol = document.querySelector(".plus");
const nSeven = document.querySelector(".nSeven");
const nEight = document.querySelector(".nEight");
const nNine = document.querySelector(".nNine");
const multiply = document.querySelector(".multiply");
const piSymbol = document.querySelector(".pi");
const nZero = document.querySelector(".nZero");
const divideSymbol = document.querySelector(".divide");
const dotSymbol = document.querySelector(".dot");
const trashSymbol = document.querySelector(".trash");
const equalsSymbol = document.querySelector(".equals");

//defines the elements, operations and symbols
const numbers = {
    nZero: '0',
    nOne: '1',
    nTwo: '2',
    nThree: '3',
    nFour: '4',
    nFive: '5',
    nSix: '6',
    nSeven: '7',
    nEight: '8',
    nNine: '9',
}
const operations = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
}
const symbols = {
    dot: '.',
    pi: 'π',
}

//adds event listener to each number
for (const number in numbers) {
    document.querySelector(`.${number}`).addEventListener('click', () => {
        console.log(numbers[number]);
    });
}

//adds event listener to each operation
for (const operation in operations) {
    document.querySelector(`.${operation}`).addEventListener('click', () => {
        console.log(operations[operation]);
    });
}

//adds event listener to each symbol
for (const symbol in symbols) {
    document.querySelector(`.${symbol}`).addEventListener('click', () => {
        console.log(symbols[symbol]);
    });
}

//* functions


//* real time display showing
function showInDisplay(value) {
    const display = document.querySelector('.results');
    display.innerHTML += value;
}

