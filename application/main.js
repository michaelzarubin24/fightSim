"use strict";
// ----------------------------------------------------------------
function main() {
  const number1 = getNumber();
  const number2 = getNumber();
  const symbol = prompt("Please enter symbol (+ - * /)");

  switch (symbol) {
    case "+":
      alert(number1 + number2);
      break;
    case "-":
      alert(number1 - number2);
      break;
    case "*":
      alert(number1 * number2);
      break;
    case "/":
      alert(number1 / number2);
      break;

    default:
      alert("Error, you are 404");
      break;
  }

  function isInvalid(number) {
    return isNaN(number);
  }
  function getNumber() {
    let isRunning = true;

    while (isRunning) {
      const number = +prompt("Enter number!");
      isRunning = isInvalid(number);
      if (!isRunning) return number;
      if (isRunning) {
        alert("Please enter numbers");
      }
    }
  }
}

main();
