// Keep track of the values
const CALCULATOR = {
    displayValue: '0', // Value to display on screen
    firstOperand: null, // Holds the first operand
    waitSecondOperand: false, // Checks if second operand has been inputted
    operator: null // holds the operator
};

// Dict that contains the math calculations
const PERFORM_CALCULATION = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

// Modify values each time a button is clicked
function inputDigit(digit) {
    const {displayValue, waitSecondOperand} = CALCULATOR;

    //Check to see if waitSecondOperand is true.
    // if so, set the displayValue to the key that was clicked
    if (waitSecondOperand === true) {
        CALCULATOR.displayValue = digit;
        CALCULATOR.waitSecondOperand = false;
    } else {
        // overwrite displayValue if the current value is 0; otherwise add digit to displayValue
        CALCULATOR.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

// Function to handle the decimal point
function inputDecimal(dot) {
    // Ensures that accidental click of the decimal point doesn't cause bugs in the operation
    if (CALCULATOR.waitSecondOperand === true) return;
    // Validate that displayValue does not already have a decimal point
    if (!CALCULATOR.displayValue.includes(dot)) {
        CALCULATOR.displayValue += dot;
    }
}

// Function to handle the operators
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = CALCULATOR;

    // When an operator key is pressed, save the number displayed on the screen
    const VALUE_OF_INPUT = parseFloat(displayValue);

    // Check to see if an operator already exists. If it already exists, update the operator
    if (operator && CALCULATOR.waitSecondOperand) {
        CALCULATOR.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        CALCULATOR.firstOperand = VALUE_OF_INPUT;
    } else if (operator) { // If an already operator exists, execute it
        const VALUE_NOW = firstOperand || 0; // if firstOperand is NULL, return 0
        let result = PERFORM_CALCULATION[operator](VALUE_NOW, VALUE_OF_INPUT);

        // Adjust the number to nine decimal places
        result = Number(result).toFixed(9);

        // remove any trailing 0's
        result = (result *1).toString();

        CALCULATOR.displayValue = parseFloat(result);
        CALCULATOR.firstOperand = parseFloat(result);

    }
    CALCULATOR.waitSecondOperand = true;
    CALCULATOR.operator = nextOperator;
}

function calculatorReset() {
    CALCULATOR.displayValue = '0';
    CALCULATOR.firstOperand = null;
    CALCULATOR.waitSecondOperand = false;
    CALCULATOR.operator = null;
}

// Updates the calculator screen with the contents of displayValue
function updateDisplay() {
    const DISPLAY = document.querySelector('.calculator-screen');
    DISPLAY.value = CALCULATOR.displayValue;
}

updateDisplay();

// Monitors button clicks
const KEYS = document.querySelector('.calculator-keys');
KEYS.addEventListener('click', (event) => {
    const {target} = event; // represents the element that was clicked

    // If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    // Ensures that AC button clears all inputs from calculator screen
    if (target.classList.contains('all-clear')) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})