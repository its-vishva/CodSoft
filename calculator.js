const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}
function appendOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}
function calculate() {
    if (firstOperand === '' || currentInput === '') return;
    let result;
    const first = parseFloat(firstOperand);
    const second = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    display.value = currentInput;
    firstOperand = '';
    operator = '';
}
function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    display.value = '';
}
