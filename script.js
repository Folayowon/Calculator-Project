const display = document.getElementById("output");
const buttons = Array.from(document.querySelectorAll("button"));
const operators = ["+", "-", "*", "/"];
let operand1 = "";
let operand2 = "";
let operator = "";

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const { value } = e.target;

    if (operators.includes(value)) {
      operator = value;
      operand1 = display.value;
      display.value = "";
    } else if (value === "=") {
      operand2 = display.value;
      display.value = eval(`${operand1} ${operator} ${operand2}`);
      operand1 = "";
      operand2 = "";
      operator = "";
    } else {
      display.value += value;
    }
  });
});
