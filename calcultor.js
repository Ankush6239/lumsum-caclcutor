document.getElementById("btn").addEventListener("click", function () {
  var operation = document.getElementById("eu").value;
//   console.log(operation);
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result;
  switch (operation) {
    case "Addition":
      result = num1 + num2;
      break;
    case "Division":
      if (num2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "Subs":
        console.log(operation)
      result = num1 - num2;
      break;
    case "Multiplication":
      result = num1 * num2;
      break;

    default:
      result = "invalid";
      break;
  }
  document.getElementById("result").value = result;
});


let a=['Add','SUB','MUL','DIVI'];

let Test= 10 ;
for(i=1;i<Test; i++){
    console.log(i);