/* ============ button selections ============ */

const btn_1 = document.querySelector(".one");
const btn_2 = document.querySelector(".two");
const btn_3 = document.querySelector(".three");
const btn_4 = document.querySelector(".four");
const btn_5 = document.querySelector(".five");
const btn_6 = document.querySelector(".six");
const btn_7 = document.querySelector(".seven");
const btn_8 = document.querySelector(".eight");
const btn_9 = document.querySelector(".nine");
const btn_clear = document.querySelector(".clear");
const btn_divide = document.querySelector(".divide");
const btn_multiply = document.querySelector(".multiply");
const btn_substract = document.querySelector(".substract");
const btn_add = document.querySelector(".add");
const btn_equal = document.querySelector(".equal");

/* ============ functions ============ */

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

/* ============ operation function ============ */

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

/* ============ result display ============ */

const display = document.querySelector(".display");
display.textContent = result || "0.00";
