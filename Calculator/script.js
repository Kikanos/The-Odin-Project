/* ============ button selections ============ */
const display_solution = document.querySelector(".display-solution");
const display = document.querySelector(".display");

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
let display_value;

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
}

/* ============ calculation logic ============ */

btn_add.addEventListener("click", () => {
  num_2 = Number(display.firstChild.nodeValue);
  if (num_1 === undefined) {
    num_1 = 0;
    operate(num_1, "+", num_2);
    clearDisplay();
  } else {
    num_1 = result;
    operate(num_1, "+", num_2);
    clearDisplay();
  }
  display.textContent = "+";
  display_solution.textContent = result;
});

btn_clear.addEventListener("click", () => {
  clearDisplay();
});
/* ============ calculation result and display ============ */

function displayNumber(x) {
  display.textContent += x;
}

function clearDisplay() {
  display.textContent = "";
  display_solution.textContent = "";
}

btn_1.addEventListener("click", () => {
  displayNumber(1);
});
btn_2.addEventListener("click", () => {
  displayNumber(2);
});
btn_3.addEventListener("click", () => {
  displayNumber(3);
});
btn_4.addEventListener("click", () => {
  displayNumber(4);
});
btn_5.addEventListener("click", () => {
  displayNumber(5);
});
btn_6.addEventListener("click", () => {
  displayNumber(6);
});
btn_7.addEventListener("click", () => {
  displayNumber(7);
});
btn_8.addEventListener("click", () => {
  displayNumber(8);
});
btn_9.addEventListener("click", () => {
  displayNumber(9);
});

/* down to here all good */

btn_equal.addEventListener("click", () => {
  operate(num_1, operator, num_2);

  display.textContent = result;
});
