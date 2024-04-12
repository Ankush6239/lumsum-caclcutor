$(document).ready(function () {
  $("#btn").click(function () {
    calculator(); // Call the calculator function when the button is clicked
  });
});

function calculator() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 / num2; // Perform division

  // Display the result in an HTML element with the id "result"
  document.getElementById("result").value = "Result: " + result;
}

// You can do further processing here, like displaying the result on the webpage
// or performing different arithmetic operations.

$(document).ready(function () {
  $("#a1").click(function () {
    alert("You clicked on me");
  });
});
