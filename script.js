let preNumber = 0;
let curNumber = "";
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
const buttons = document.querySelectorAll(".digit");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const calculator = document.querySelector(".calculator");
const everyButton = document.querySelectorAll(".button");
let displayValue = 0;

function resetDisplay() {
    display.textContent = "0";
    displayValue = "";
}

//Make digit buttons work
// buttons.forEach(item => {
//     item.addEventListener("click", event => {
//         //Removes default zero
//         display.textContent = display.textContent.replace("0", "");
//         if(display.textContent.length <= 8) {
//             display.textContent += event.target.textContent;
//         }
//     });
// });


// //Make operator buttons work
// operators.forEach(item => {
//     item.addEventListener("click", event => {
//         operator = event.target.textContent;
//         number1 = parseFloat(display.textContent);
//         display.textContent = "0";
//     });
// });

// //Make equals button work
// equals.addEventListener("click", event => {
//     number2 = parseFloat(display.textContent);
    
//     console.log(number1);
//     console.log(number2);

//     console.log(operate(operator, number1, number2));
// });

// //Make clear button work
// clear.addEventListener("click", event => {
//     number1 = 0;
//     number2 = 0;
//     operator = "";
//     //resetDisplay();
// });

everyButton.forEach(item => {
    item.addEventListener("click", event => {
        if(event.target.classList.contains("digit")) {
            display.textContent = curNumber;
            display.textContent += event.target.textContent;
            curNumber += event.target.textContent;
            console.log(curNumber);
        }
        else if(event.target.classList.contains("operator")) {
            //display.textContent = parseFloat(curNumber);
            operator = event.target.textContent;
            preNumber = curNumber;
            curNumber = "";
        }
        else if(event.target.classList.contains("equals")) {
            displayValue = operate(operator, parseFloat(preNumber), parseFloat(curNumber));
            display.textContent = displayValue;
            curNumber = displayValue;
        }
        else if(event.target.classList.contains("clear")) {
            curNumber = "";
            preNumber = 0;
            displayValue = "";
            operator = "";
            display.textContent = "0";
        }
    });
});



//Make box shadow effect
document.body.addEventListener("mousemove", event => {
    let xAxis = event.pageX * 0.02;
    let yAxis = event.pageY * 0.02;

    calculator.style.boxShadow = `${xAxis}px ${yAxis}px #c481c0`;
});

//Math.trunc(value*100000000)/100000000; round number to 8 digits after comma