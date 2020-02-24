var operator = null;
var inputValueStored = 0;

function getContentClick(event) {
  const value = event.target.innerHTML;
  numberSelection(value);
}

const numberSelection = value => {
  value === "0" ? includeNumber(0) : null;
  value === "1" ? includeNumber(1) : null;
  value === "2" ? includeNumber(2) : null;
  value === "3" ? includeNumber(3) : null;
  value === "4" ? includeNumber(4) : null;
  value === "5" ? includeNumber(5) : null;
  value === "6" ? includeNumber(6) : null;
  value === "7" ? includeNumber(7) : null;
  value === "8" ? includeNumber(8) : null;
  value === "9" ? includeNumber(9) : null;
  value === "." ? includeNumber(".") : null;

  value === "+" ? opSelector("+") : null;
  value === "-" ? opSelector("-") : null;
  value === "x" ? opSelector("*") : null;
  value === "÷" ? opSelector("/") : null;
  value === "%" ? opSelector("%") : null;
  value === "+/-" ? opSelector("+/-") : null;

  value === "AC" ? resetCalculator() : null;
  value === "=" ? calcOp() : null;
};

function includeNumber(value) {
  const inputDisplay = document.getElementsByClassName("calcDisplay")[0];
  const setValue = inputDisplay.value;

  if (setValue === "0" && setValue.length === 1 && value !== ".") {
    inputDisplay.value = value;
    return;
  }

  if (inputDisplay.value === "" && value === ",") {
    inputDisplay.value = 0 + value;
    return;
  }

  inputDisplay.value = setValue + value;
}

function opSelector(operator) {
  const inputDisplayValue = document.getElementsByClassName("calcDisplay")[0]
    .value;
  this.operator = operator;

  if (inputDisplayValue != 0) {
    calcOp();
  }
}

function calcOp() {
  const inputDisplay = document.getElementsByClassName("calcDisplay")[0];
  let valueOne = transformStrToNumber(this.inputValueStored);
  let valueTwo = transformStrToNumber(inputDisplay.value);
  let total = 0;

  if (this.operator === "+" && inputDisplay.value !== "") {
    total = valueOne + valueTwo;
  }

  if (this.operator === "-" && inputDisplay.value !== "") {
    if (valueOne !== 0) {
      total = valueOne - valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "*" && inputDisplay.value !== "") {
    if (valueOne !== 0) {
      total = valueOne * valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "/" && inputDisplay.value !== "") {
    if (valueOne !== 0) {
      total = valueOne / valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "%" && inputDisplay.value !== "") {
    total = valueTwo / 100;
  }

  if (this.operator === "+/-" && inputDisplay.value !== "") {
    if (valueTwo > 0) {
      total = -valueTwo;
    }
  }

  this.inputValueStored = total;
  inputDisplay.value = "";
  inputDisplay.placeholder = total;
}

const resetCalculator = () => {
  const inputDisplay = document.getElementsByClassName("calcDisplay")[0];
  inputDisplay.value = 0;
  this.inputValueStored = 0;
  this.operator = null;
};

function transformStrToNumber(value) {
  if (typeof value !== "number") {
    let resultTransform = value;
    return parseFloat(resultTransform);
  }
  return value;
}
