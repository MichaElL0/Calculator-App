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
const buttons = document.querySelectorAll(".digit");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const calculator = document.querySelector(".calculator");
const everyButton = document.querySelectorAll(".button");
let displayValue = 0;
let preNumber = 0;
let curNumber = 0;
let operator = "";
let equalClicked = false;

function reset() {
    curNumber = 0;
    preNumber = 0;
    displayValue = "";
    operator = "";
    display.textContent = "0";
}

everyButton.forEach(item => {
    item.addEventListener("click", event => {
        if(event.target.classList.contains("digit")) {
            if(display.textContent.length <= 9) {
                // display.textContent = parseFloat(curNumber);
                // displayValue += event.target.textContent;
                // curNumber = parseFloat(displayValue);
                // display.textContent = parseFloat(displayValue);
                curNumber += event.target.textContent;
                display.textContent = parseFloat(curNumber);
            }
        }
        else if(event.target.classList.contains("operator")) {
            // operator = event.target.textContent;
            // preNumber = parseFloat(displayValue);
            // curNumber = 0;
            // displayValue = 0;
            operator = event.target.textContent;
            preNumber = parseFloat(display.textContent);
            curNumber = 0;

        }
        else if(event.target.classList.contains("equals")) {
            if(curNumber == 0 || preNumber == 0 && operator == "/") {
                alert("Don't break me... :(");
                reset();
                return;
            }
            //displayValue = operate(operator, parseFloat(preNumber), parseFloat(curNumber));
            //displayValue = Math.trunc(operate(operator, parseFloat(preNumber), parseFloat(curNumber))*10000000)/10000000;
            display.textContent = Math.trunc(operate(operator, parseFloat(preNumber), parseFloat(curNumber))*10000000)/10000000;
            preNumber = parseFloat(display.textContent);
            curNumber = 0;
        }
        else if(event.target.classList.contains("clear")) {
            reset();
        }
        console.log(`Current number: ${curNumber}, previous number: ${preNumber}, display value: ${displayValue} and operator: ${operator}`);
    });
});


//Make box shadow effect
document.body.addEventListener("mousemove", event => {
    let xAxis = event.pageX * 0.02;
    let yAxis = event.pageY * 0.02;

    calculator.style.boxShadow = `${xAxis}px ${yAxis}px #c481c0`;
});

//Math.trunc(value*100000000)/100000000; round number to 8 digits after comma