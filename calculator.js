let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function appendToDisplay(value) {
    display.innerText += value;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
function calculateSquareRoot() {
    try {
        display.innerText = Math.sqrt(eval(display.innerText));
    } catch (e) {
        display.innerText = 'Error';
    }
}
function calculateLog() {
    try {
        
        display.innerText = Math.log10(eval(display.innerText));
    } catch (e) {
        display.innerText = 'Error';
    }
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}
function storeValue() {
    tempValue = display.innerText;
}

function recallValue() {
    display.innerText += tempValue;
}
let tempValue = '';
let isInitialInput = true;

function clearDisplay() {
    display.innerText = '';
    isInitialInput = true;
}
function appendToDisplay(value) {
    if (isInitialInput) {
        display.innerText = value;
        isInitialInput = false;
    } else {
        display.innerText += value;
    }
}