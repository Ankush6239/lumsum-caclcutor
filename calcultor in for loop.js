function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "cannot divide by zero";
  }
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function calculator() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("eu").value;
  let result;
  switch (operation) {
    case "Addition":
      result = add(num1, num2);
      break;
    case "Subs":
      result = subtract(num1, num2);
      break;
    case "Division":
      result = divide(num1, num2);
      break;
    case "Multiplication":
      result = multiplication(num1, num2);
      break;
  }
  document.getElementById('result').value = result;
}

document.getElementById('btn').addEventListener('click', calculator);
