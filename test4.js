//  
$(document).ready(function(){
  $("#btn").click(function(){
      let result;
   
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      result= num1 + num2;
      document.getElementById("result").value = result;
  });
});

$(document).ready(function(){
  $("#btn").click(function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resul;
    result = num1 - num2;
    document.getElementById("result").value = result;
  });
});
$(document).ready(function(){
  $("#btn").click(function(){
    let result;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    result = num1 * num2;
   document.getElementById("result").value = result;
  });
});
$(document).ready(function(){
  $("#btn").click(function(){
    let result;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    result = num1/num2;
    document.getElementById("result").value = result;
  });
});


 
