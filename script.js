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
let preOperator = "";
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
                equalClicked = false;
                curNumber += event.target.textContent;
                display.textContent = parseFloat(curNumber);
            }
        }
        else if(event.target.classList.contains("operator")) {
            equalClicked = false;
            preOperator = operator;
            operator = event.target.textContent;
            
            if(operator != "" && preOperator != "") {
                console.log("Chained");
                display.textContent = Math.trunc(operate(preOperator, parseFloat(preNumber), parseFloat(curNumber))*10000000)/10000000;
                preNumber = parseFloat(display.textContent);
                curNumber = 0;
            }
            else {
                console.log("Normal");
                preNumber = parseFloat(display.textContent);
                curNumber = 0;
            }
        }
        else if(event.target.classList.contains("equals")) {
            equalClicked = true;
            if(curNumber == 0 || preNumber == 0 && operator == "/") {
                alert("Don't break me... :(");
                reset();
                return;
            }
            display.textContent = Math.trunc(operate(operator, parseFloat(preNumber), parseFloat(curNumber))*1000000)/1000000;
            preNumber = Math.trunc(parseFloat(display.textContent)*100000000)/100000000;
            curNumber = 0;
            operator = "";
        }
        else if(event.target.classList.contains("clear")) {
            reset();
        }
        else if(event.target.classList.contains("dot")) {
            if(!display.textContent.includes(".")) {
                curNumber += ".";
                display.textContent += ".";
            }
        }
        //console.log(`Current number: ${curNumber}, previous number: ${preNumber} and operator: ${operator} and the previous operator: ${preOperator}. Equals sign clicked: ${equalClicked}`);
    });
});


//Make box shadow effect
document.body.addEventListener("mousemove", event => {
    let xAxis = event.pageX * 0.02;
    let yAxis = event.pageY * 0.02;

    calculator.style.boxShadow = `${xAxis}px ${yAxis}px #c481c0`;
});

//Math.trunc(value*100000000)/100000000; round number to 8 digits after comma