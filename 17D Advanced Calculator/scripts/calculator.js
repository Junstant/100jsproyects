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
    pi: Math.PI,
}

//adds event listener to each number
for (const number in numbers) {
    document.querySelector(`.${number}`).addEventListener('click', () => {
        showInDisplay(numbers[number]);
    });
}

//adds event listener to each operation
for (const operation in operations) {
    document.querySelector(`.${operation}`).addEventListener('click', () => {
        showInDisplay(operations[operation]);
    });
}

//adds event listener to each symbol
for (const symbol in symbols) {
    document.querySelector(`.${symbol}`).addEventListener('click', () => {
        showInDisplay(symbols[symbol]);
    });
}

//* functions

//* real time display showing
let firstTime = true;
function showInDisplay(value) {
    if (firstTime) {
        document.querySelector('.results').innerHTML = '';
        firstTime = false;
    }
    const display = document.querySelector('.results');
    display.innerHTML += value;
}

//* makes the calculations
function calculate() {
    const operation = document.querySelector('.results').innerHTML;
    let result = eval(operation);
    document.querySelector('.results').innerHTML = result;
    addToHistory(operation, result);
    if(result === undefined || result === Infinity || result === -Infinity){
        firstTime = true;
    }
}
equalsSymbol.addEventListener('click', calculate);

//* clear the display
function clearDisplay() {
    document.querySelector('.results').innerHTML = '';
}
trashSymbol.addEventListener('click', clearDisplay);

//* add the operation to the history
function addToHistory(operation, result) {
    let fragment = document.createDocumentFragment();
    let h2 = document.createElement('h2');
    let div = document.createElement('div');
    let copyIcon = document.createElement('i');
    let textToCopy = `${operation} = ${result}`;
    div.classList.add('history', 'conStyleOne');
    copyIcon.classList.add('ph', 'ph-copy', 'conStyleOne');
    copyIcon.addEventListener('click', () => {
        navigator.clipboard.writeText(textToCopy);
    });
    h2.textContent = textToCopy;
    div.appendChild(h2);
    div.appendChild(copyIcon);
    fragment.appendChild(div);
    document.querySelector('.rightContainer').appendChild(fragment);
}

//* keyboard support
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '0':
            showInDisplay(numbers.nZero);
            break;
        case '1':
            showInDisplay(numbers.nOne);
            break;
        case '2':
            showInDisplay(numbers.nTwo);
            break;
        case '3':
            showInDisplay(numbers.nThree);
            break;
        case '4':
            showInDisplay(numbers.nFour);
            break;
        case '5':
            showInDisplay(numbers.nFive);
            break;
        case '6':
            showInDisplay(numbers.nSix);
            break;
        case '7':
            showInDisplay(numbers.nSeven);
            break;
        case '8':
            showInDisplay(numbers.nEight);
            break;
        case '9':
            showInDisplay(numbers.nNine);
            break;
        case '+':
            showInDisplay(operations.plus);
            break;
        case '-':
            showInDisplay(operations.minus);
            break;
        case '*':
            showInDisplay(operations.multiply);
            break;
        case '/':
            showInDisplay(operations.divide);
            break;
        case '.':
            showInDisplay(symbols.dot);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            clearDisplay();
            break;
    }
});