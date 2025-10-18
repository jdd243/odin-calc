
//State
let a = "";
let operator = "";
let b = "";
let justCalculated = false;

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

    const x = parseFloat(a);
    const y = parseFloat(b);

    if (Number.isNaN(x) || Number.isNaN(y)) return "Error"
    if (operator === "+") return add(x, y);
    if (operator === "-") return subtract(x, y);
    if (operator === "*") return multiply([x, y]);
    if (operator === "/") return divide(x, y);
    return "Error";
};

//Input
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.key;

        //number input
        if (!isNaN(key) || key ===".") {

            if (justCalculated && !operator) { 
            a = ""; 
            justCalculated = false; 
            }  
            if (!operator) {

                a += key;
                value(a);
            }
            else {
                b += key;
                value(b)
            }
            return;
        }
        //operator input
        if (["+", "-", "*", "/"].includes(key)) {

           if (a && operator && b) {
                const result = compute(a, operator, b);
                value(result);
                a = result.toString();
                b = "";
            }
            operator = key;
            justCalculated = false;
            return;
        }
        //Equals input
        if (key === "=") {

            if (a && operator && b) {

                const result = compute(a,operator, b);

                value(result);
                a = result.toString();
                operator = "";
                b = "";
                justCalculated = true;
            }
        }
        //Clear input
        if (key === "clear") {
            a = "";
            operator = "";
            b = "";
            value("0");
            return;
        }
        //Delete input
        if (key === "delete") {

            if (justCalculated && !operator) return;

            if(!operator) {
                a = a.slice(0, -1);
                value (a || "0");
            }
            else {
                b = b.slice(0 ,-1);
                value(b || "0");
            }
            return;
        }
    })    
})
value(0);

document.addEventListener("keydown", event => {
  const keyMap = {
    Enter: "=",
    "=": "=",
    Backspace: "delete",
    Escape: "clear",
    c: "clear"
  };
    const key = keyMap[event.key] || event.key;
    const btn = document.querySelector(`[data-key="${key}"]`);
    if (!btn) return;

    btn.classList.add("active");
    btn.click();

    setTimeout(() => btn.classList.remove("active"), 120)
});