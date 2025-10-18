
//State
let a = "";
let operator = "";
let b = "";

//UI
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("[data-key]");

const value = val => screen.textContent = val;

//Math functions
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(num) {
  return num.reduce((a, b) => a * b, 1)
};

const divide = function(a, b) {
    if(b === 0) return "Error"
    return a / b;
}

//Math using functions
const compute = (a, operator, b) => {

    const x = parseFloat(aStr);
    const y = parseFloat(bStr);

    if (Number.isNaN(x) || Number.isNaN(y)) return "Error"
    if (operator === "+") return add(x, y);
    if (op === "-") return subtract(x, y);
    if (op === "*") return multiply([x, y]);
    if (op === "/") return divide(x, y);
    return "Error";
};

