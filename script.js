let number1 = 0;
let number2 = 0;
let operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(_operator, _num1, _num2) {
    switch(_operator) {
        case "+":
            return add(_num1, _num2);
        case "-":
            return subtract(_num1, _num2);
        case "*":
            return multiply(_num1, _num2);
        case "/":
            return divide(_num1, _num2);
        default:
            return "No such operator";

    }
}


//Make digit buttons work and appear on the display
const display = document.querySelector(".display");
let displayValue = "";
const buttons = document.querySelectorAll(".digit");

function resetDisplay() {
    display.textContent = "0";
    displayValue = "";
}

//Make digit buttons work
buttons.forEach(item => {
    item.addEventListener("click", event => {
        if(displayValue.length >= 9) {
            return;
        }
        else {
            display.textContent = "";
            displayValue = "";
            displayValue += event.target.textContent;
            display.textContent = displayValue;
        }
    });
});


//Make clear button work
const clear = document.querySelector("#clear");
clear.addEventListener("click", event => {
    number1 = 0;
    number2 = 0;
    operator = "";
    resetDisplay();
});


//Make operator buttons work
const operators = document.querySelectorAll(".operator");
operators.forEach(item => {
    item.addEventListener("click", event => {
        operator = event.target.textContent;
        if(displayValue.toString().length >= 9) {
            number1 = parseFloat(displayValue).toFixed(8);
        }
        else {
            number1 = parseFloat(displayValue);
    
        }
        
        displayValue = "";
    });
});


//Make equals button work
const equals = document.querySelector("#equals");
equals.addEventListener("click", event => {
    number2 = parseFloat(displayValue);
    console.log(number2);
    
    if((number1 == 0 || number2 == 0) && operator == "/") {
        alert("Don't break me... :(");
        resetDisplay();
        return;
    }
    else if(operator == "") {
        console.log("shit");
        return;
    }

    displayValue = operate(operator, number1, number2);

    if(displayValue.toString().length >= 9) {
        console.log(true);
        console.log(displayValue);
        display.textContent = parseFloat(displayValue).toFixed(8);
    }
    else {
        //display.textContent = displayValue;
        console.log("Normal output");

    }
    // console.log(number1);
    // console.log(number2);
    // console.log(operator);
    // console.log("");
    // console.log(displayValue);
    // console.log("----------");

    number1 = displayValue;
});