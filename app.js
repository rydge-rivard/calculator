let x = 1;
let y = 1;
let operator = '';
let displayNumbers = 0;

function add(x, y) {
    return x + y;
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
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    } else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    }
}

const displayDOM = document.querySelector('.display')
const btn = document.querySelectorAll('.number')
btn.forEach((singleButton) => {
    singleButton.addEventListener('click', () => {
        displayNumbers === 0 ? 
        displayNumbers = singleButton.textContent : displayNumbers += singleButton.textContent;
        displayDOM.textContent = displayNumbers
    })
});