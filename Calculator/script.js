console.log("hello world");

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

let num_1;
let operator;
let num_2;
let result;

function operate(num_1, operator, num_2) {
  if (operator === "+") {
    return (result = add(num_1, num_2));
  }
  if (operator === "-") {
    return (result = subtract(num_1, num_2));
  }
  if (operator === "*") {
    return (result = multiply(num_1, num_2));
  }
  if (operator === "/") {
    return (result = divide(num_1, num_2));
  }
  return result;
}

/* console.log(operate(4, "-", 2)); */

/* ======================================= */

const display = document.querySelector(".display");
display.textContent = result || "0.00";
