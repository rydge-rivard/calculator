let x = 0;
let y = 0;
let operator = '';
let displayNumbers = 0;

function add(x, y) {
    console.log(typeof(x));
    console.log(typeof(y));
    return +x + +y;
} 

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    if (operator === '+') {
        displayNumbers = add(x, y);
    } else if (operator === '-') {
        displayNumbers = subtract(x, y);
    } else if (operator === 'x') {
        displayNumbers = multiply(x, y);
    } else if (operator === '/') {
        displayNumbers = divide(x, y);
    }
    return displayDOM.textContent = displayNumbers;
}

const displayDOM = document.querySelector('.display');
const btn = document.querySelectorAll('.number');
btn.forEach((singleButton) => {
    singleButton.addEventListener('click', () => {
        displayNumbers === 0 ? 
        displayNumbers = singleButton.textContent : displayNumbers += singleButton.textContent;
        displayDOM.textContent = displayNumbers;
    });
});

const btnOperator = document.querySelectorAll('.operator');
btnOperator.forEach((singleOperator) => {
    singleOperator.addEventListener('click', () => {
        x = displayNumbers;
        //x !== 0 ? y = displayNumbers : x = displayNumbers;
        displayNumbers = 0;
        operator = singleOperator.textContent;
        //x && y !== 0 ? operate(x, y, operator) : console.log(operate(x, y, operator));
    });
});

const btnEquals = document.querySelector('.equals');
btnEquals.addEventListener('click', () => {
    x !== 0 ? y = displayNumbers: x = displayNumbers;
    operate(x, y, operator);
});

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    displayNumbers = 0;
    displayDOM.textContent = displayNumbers;
    x = 0;
    y = 0;
    operator = '';
});