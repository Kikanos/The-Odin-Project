/* ============ button selections ============ */
const display_solution = document.querySelector(".display-solution");
const display_num = document.querySelector(".display-num");
const display_op = document.querySelector(".display-op");

const btn_1 = document.querySelector(".one");
const btn_2 = document.querySelector(".two");
const btn_3 = document.querySelector(".three");
const btn_4 = document.querySelector(".four");
const btn_5 = document.querySelector(".five");
const btn_6 = document.querySelector(".six");
const btn_7 = document.querySelector(".seven");
const btn_8 = document.querySelector(".eight");
const btn_9 = document.querySelector(".nine");
const btn_0 = document.querySelector(".zero");
const btn_dot = document.querySelector(".dot");
const btn_clear = document.querySelector(".clear");
const btn_divide = document.querySelector(".divide");
const btn_multiply = document.querySelector(".multiply");
const btn_substract = document.querySelector(".substract");
const btn_add = document.querySelector(".add");
const btn_equal = document.querySelector(".equal");

/* ============ operate function ============ */

function operate(a, op, b) {
  if (op === "+") {
    return (result = a + b);
  }
  if (op === "-") {
    return (result = a - b);
  }
  if (op === "*") {
    return (result = a * b);
  }
  if (op === "/") {
    return (result = a / b);
  }
}

/* ============ calculation logic ============ */

let num_1;
let num_2;
let result;
let symbol;

btn_add.addEventListener("click", () => {
  num_2 = Number(display_num.firstChild.nodeValue);

  if (num_1 === undefined) {
    num_1 = 0;
    operate(num_1, "+", num_2);
    clearDisplay();
  } else {
    num_1 = result;
    operate(num_1, "+", num_2);
    clearDisplay();
  }
  display_op.textContent = "+";
  display_num.textContent = "";
  display_solution.textContent = result;
});

btn_substract.addEventListener("click", () => {
  display_op.textContent = "-";
  num_2 = Number(display_num.firstChild.nodeValue);

  if (num_1 === undefined) {
    num_1 = 0;
    operate(num_1, "-", num_2);
    clearDisplay();
  } else {
    num_1 = result;
    operate(num_1, "-", num_2);
    clearDisplay();
  }

  display_solution.textContent = result;
});

btn_multiply.addEventListener("click", () => {
  num_2 = Number(display_num.firstChild.nodeValue);

  if (num_1 === undefined) {
    num_1 = 0;
    operate(num_1, "*", num_2);
    clearDisplay();
  } else {
    num_1 = result;
    operate(num_1, "*", num_2);
    clearDisplay();
  }
  display_op.textContent = "*";
  display_solution.textContent = result;
});

btn_divide.addEventListener("click", () => {
  num_2 = Number(display_num.firstChild.nodeValue);

  if (num_1 === undefined) {
    num_1 = 0;
    operate(num_1, "/", num_2);
    clearDisplay();
  } else {
    num_1 = result;
    operate(num_1, "/", num_2);
    clearDisplay();
  }
  display_op.textContent = "/";
  display_solution.textContent = result;
});

btn_clear.addEventListener("click", () => {
  reset_btn();
});
/* ============ calculation result and display ============ */

function displayNumber(x) {
  display_num.textContent += x;
}

function reset_btn() {
  display_op.textContent = "";
  display_num.textContent = "";
  display_solution.textContent = 0;
  operate(0, "*", 0);
}

function clearDisplay() {
  display_op.textContent = "";
  display_num.textContent = "";
  display_solution.textContent = "";
}

btn_1.addEventListener("click", () => {
  displayNumber(1);
  symbol = display_op.innerHTML; //continue here
});
btn_2.addEventListener("click", () => {
  displayNumber(2);
  symbol = display_op.innerHTML;
});
btn_3.addEventListener("click", () => {
  displayNumber(3);
  symbol = display_op.innerHTML;
});
btn_4.addEventListener("click", () => {
  displayNumber(4);
  symbol = display_op.innerHTML;
});
btn_5.addEventListener("click", () => {
  displayNumber(5);
  symbol = display_op.innerHTML;
});
btn_6.addEventListener("click", () => {
  displayNumber(6);
  symbol = display_op.innerHTML;
});
btn_7.addEventListener("click", () => {
  displayNumber(7);
  symbol = display_op.innerHTML;
});
btn_8.addEventListener("click", () => {
  displayNumber(8);
  symbol = display_op.innerHTML;
});
btn_9.addEventListener("click", () => {
  displayNumber(9);
  symbol = display_op.innerHTML;
});

btn_0.addEventListener("click", () => {
  displayNumber(0);
  symbol = display_op.innerHTML;
});

btn_dot.addEventListener("click", () => {
  symbol = symbol;
  displayNumber(".");
});

btn_equal.addEventListener("click", () => {
  const x = Number(display_num.firstChild.nodeValue);
  const y = Number(display_solution.firstChild.nodeValue);

  console.log(x);
  console.log(symbol);
  console.log(y);

  result = operate(x, symbol, y);
  console.log("=");
  console.log(result);
  display_solution.textContent = result;
});
