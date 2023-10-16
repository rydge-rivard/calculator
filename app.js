let x;
let y;
let operator = '';
let displayNumbers = 0;

function add(x, y) {
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
    return displayNumbers;
}

const displayDOM = document.querySelector('.display');
const btn = document.querySelectorAll('.number');
btn.forEach((singleButton) => {
    singleButton.addEventListener('click', () => {
        if (singleButton.textContent === '.' && checkDecimal()) {
            return displayNumbers;
        } else {
            displayNumbers === 0 ?
            displayNumbers = singleButton.textContent : displayNumbers += singleButton.textContent;
            displayDOM.textContent = displayNumbers;
            y = displayNumbers;
        }
    });
});

function checkDecimal() {
    return displayNumbers.charAt(displayNumbers.length - 1) === '.';
};

const btnOperator = document.querySelectorAll('.operator');
btnOperator.forEach((singleOperator) => {
    singleOperator.addEventListener('click', () => {
        if (x && y !== undefined) {
            x = operate (x, y, operator);
            displayDOM.textContent = Math.round(x * 100) / 100;
            displayNumbers = 0;
            y = undefined;
        } else if (x === undefined) {
            x = y;
            displayNumbers = 0;
        }
        operator = singleOperator.textContent;
    });
});

const btnEquals = document.querySelector('.equals');
btnEquals.addEventListener('click', () => {
    if (x === undefined || y === undefined) {
        return;
    } else if (y == 0 && operator == '/') {
        displayDOM.textContent = 'No dividing by zero fool.';
        console.log(displayDOM.textContent);
    } else {
        x = operate(x, y, operator);
        displayDOM.textContent = Math.round(x * 100) / 100;
        y = undefined;
        displayNumbers = 0;
    }
});

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    displayNumbers = 0;
    displayDOM.textContent = displayNumbers;
    x = undefined;
    y = undefined;
    operator = '';
});

const btnDelete = document.querySelector('.delete');
btnDelete.addEventListener('click', () => {
            displayNumbers = displayNumbers.slice(0, (displayNumbers.length - 1));
            displayDOM.textContent = displayNumbers;
            y = displayNumbers;
});