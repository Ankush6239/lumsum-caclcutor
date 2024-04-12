function add(num1, num2) {
    return num1 + num2;
  }
  
  function subs(num1, num2) {
    return num1 - num2;
  }
  
  function div(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "cannot divide by zero";
    }
  }
  
  function mul(num1, num2) {
    return num1 * num2;
  }
  
  function calculator() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("cal").value;
    let result;
  
    if (operation === "Add") {
      result = add(num1, num2);
    } else if (operation === "Subs") {
      result = subs(num1, num2);
    } else if (operation === "Div") {
      result = div(num1, num2);
    } else if (operation === "Mul") {
      result = mul(num1, num2);
    }
  
    document.getElementById('result').value = result;
  }
  
  document.getElementById('btn').addEventListener('click', calculator);
    
let age = 35;
let ticketprice;
 if (age<12){
  ticketprice = 5;
 }else if (age<24){
  ticketprice = 10;
 }else if ( age<34){
  ticketprice = 20;
 }else if (age<44){
  ticketprice = 30;
 }else{
  ticketprice = 60;
 }
 console.log("ticket price :$" + ticketprice);
