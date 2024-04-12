// function subtract(){
//     let num1 = parseFloat( document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let sub = num1 - num2;
//     document.getElementById("result").value= sub;
// }
// function Multiplication(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let mul = num1 * num2;
//     document.getElementById("result").value =mul;
// }
// function Addition(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let sum = num1 + num2 ;
//     document.getElementById("result").value = sum;
// }
// function Division(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 =parseFloat(document.getElementById("num2").value);
//     let div = num1/num2;
//     document.getElementById("result").value = div;

// }

// function calculator(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let opreator = document.getElementById("cal").value;
//     let result;
//     if(opreator === "Subtraction"){
//         result = num1 - num2;
//     }else if ( opreator ==="Multiplication") {
//           result = num1 * num2 ;
//     }else if (opreator==="Addition"){""
//           result = num1 + num2;
//     }else if (opreator==="Division"){
//         result = num1/num2;
//     }
// console.log(result);
//     document.getElementById("result").value= result;
// }

// function calculator() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("cal").value;
//     let result;
//     const operations = {
//         'Subtraction': (a, b) => a - b,
//         'Multiplication': (a, b) => a * b,
//         'Addition': (a, b) => a + b,
//         'Division': (a, b) => a / b,
//     };
//     // Loop through the operations object to find the selected operation
//     for (let key in operations) {
//         if (key === operator) {
//             result = operations[key](num1, num2);
//             break; // Once the operation is found, exit the loop
//         }
//     }
//     document.getElementById("result").value = result;
// //
// let a = 100;
// for(let i = 10; i<=a; i ++){
//     console.log(i);
// }
//  let  b = 50;
//  for (let i =0; i<=b; i++){
//     if (i%5===0){
//         console.log("this is true",+ i);
//     } else{
//         console.log("not true", );
//     }
// }

//  let c = 50;
//  for (let i = 0; i <=c; i++){
//     if(i % 2 ==0){
//         console.log(i);
//     }
//     else{

//     }
//  }

// function calculator(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("cal").value;
//     let result;
//     console.log(operator);
//     for(let i =0; i<=operator.length,i++){
//         if(operator ==="Subtraction"){
//             result = num1-num2;
//         }else if(operator === "Addition"){
//             result = num1 + num2;
//         }else if (operator ==="Multiplication"){
//             result = num1 * num2;
//         }else if(operator ==="Division"){
//             result = num1 / num2;
//         }
//     }
//     console.log(result);
//     document.getElementById(result).value=result;
// }

// function Addition(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("cal").value;
//     let result=0;
//     console.log(operator);
//     // for(let i =0; i<=operator.length,i++){
//         if(operator ==="Subtraction"){
//             result = num1-num2;
//         }else if(operator === "Addition"){
//             result = num1 + num2;
//         }else if (operator ==="Multiplication"){
//             result = num1 * num2;
//         }else if(operator ==="Division"){
//             result = num1 / num2;
//         }
//     // }
//     // console.log(result);
//     document.getElementById('result').value=result;
//     }

// let ba = 45;
// for(let i; i<=ba; i ++){
//     if(i % 3 ===0){
//         console.log(i);
//     }else{
//         console.log(i);
//     }
// }

// const operation = {
//     'Subtraction':(a,b)=> a-b,
//     'Multiplication':(a,b) => a*b,
//     'Addition':(a,b)=> a+b,
//     'Division':(a,b)=> a/b,
// }
// function calculator(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("cal").value;
//     let operation= document.createElement("option");
// }

// console.log(a[2])
// let =['Add',"Sub","Div","Mul"];
// let Select=document.getElementById("cal");

// for(let i=0;i<a.length;i++){
//     // console.log(a[i])
//     var create=document.createElement('option');
//      create.value=a[i];
//      create.textContent=a[i];
//      Select.appendChild(create);
//      console.log(create)
// }
// if("add"===Option){
//     alert("hello")

// }
// let a =['Add',"Sub","Div","Mul"];
// let select= document.getElementById("cal");
// for(let i=0;i<a.length;i++){
//     // console.log(a[i])
//     var create = document.createElement('option');
//      create.value=a[i];
//      create.textContent= a[i];
//      select.appendChild(create);
//      console.log(create);
// }
// function calculator(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("cal").value;

//     let result;

//     if(operator==="Add"){
//       result = num1+ num2;
//     }else if (operator === "Sub"){
//         result = num1 - num2;
//     }else if (operator === "Div"){
//         result = num1/num2;
//     }else if (operator === "Mul"){
//         result = num1 * num2;
//     }
//     document.getElementById("result").value= result;
// }
// function calculator(){
//     let a=['Add',"Sub","Div","Mul"];
// let Select=document.getElementById("cal");

// for(let i=0;i<a.length;i++){
//     // console.log(a[i])
//     var create=document.createElement('option');
//      create.value=a[i];
//      create.textContent=a[i];
//      Select.appendChild(create);
//      console.log(create)
// }
// }

let a = ["Add", "Sub", "Div", "Mul"];
let select = document.getElementById("cal");
for (let i = 0; i < a.length; i++) {
  // console.log(i);
  var create = document.createElement("option");
  create.value = a[i];
  create.textContent = a[i];
  select.appendChild(create);
  console.log(create);
}
function calculator() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("cal").value;
  let result;
  if (operator === "Add") {
    result = num1 + num2;
  } else if (operator === "Sub") {
    result = num1 - num2;
  } else if (operator === "Div") {
    result = num1 / num2;
  } else if (operator === "Mul") {
    result = num1 * num2;
  }
  document.getElementById("result").value = result;
}
//  let ankush = ["class1","class2","class3","class4"]
//  let select = document.getElementById("cal");
//  for( let i=0; i<ankush.length; i++){
//     var babita =document.createElement("option");
//     babita.value= ankush[i];
//     babita.textContent= ankush[i];
//     select.appendChild(babita);

//  }
//  let anshu = ["root1","root2","root3","root4"];
                    //  let rootselect = document.getElementById("cal");
                    //  for(let i=0; i<anshu.length; i++ ){
                    //     let btn = document.createElement("option");
                    //     btn.value= anshu[i];
                    //     btn.textContent= anshu[i];
                    //     rootselect.appendChild(btn);
                    //  }