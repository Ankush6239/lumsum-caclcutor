// const operation = [
//         (a,b) = a+b,
//         (a,b) = a-b,
//         (a,b) = a/b,
//         (a,b) = a*b,
//     ];
//     const num1 = document.getElementById("num1");
//     const num2 = document.getElementById("num2");
//     const eu = document.getElementById("eu");
//     const btn = document.getElementById("btn");
//     const result=document.getElementById("result");

//     btn.addEventListener("click",()=>{
//         const n1 =parseFloat( num1.value);
//         const n2 =parseFloat(num2.value);
//         const selectedop = eu.value;

//         for(let i = 0; i<operation.length; i++){
//             if(selectedop ===operation[i].name){
//               result.value = operation[i](n1,n2);
//               break;
//             }
//         }
//     });

// let a=["Add","Sub","Mul","Divi"];
// const operation = [
//     (a, b) => a + b,
//     (a, b) => a - b,
//     (a, b) => a / b,
//     (a, b) => a * b,
// ];

// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const eu = document.getElementById("eu");
// const btn = document.getElementById("btn");
// const result = document.getElementById("result");

// btn.addEventListener("click", () => {
//     const n1 = parseFloat(num1.value);
//     const n2 = parseFloat(num2.value);
//     const selectedOp = eu.value;

//     if (selectedOp === "Add") {
//         result.value = operation[0](n1, n2);
//     } else if (selectedOp === "Subs") {
//         result.value = operation[1](n1, n2);
//     } else if (selectedOp === "Div") {
//         result.value = operation[2](n1, n2);
//     } else if (selectedOp === "Mul") {
//         result.value = operation[3](n1, n2);
//     } else {
//         result.value = "Invalid operation";
//     }
// });
// // function sumArray(arr){
// //     return arr.reduce((a,b)=>a+b,0);
// // }
// // console.log(sumArray([1,2,3,4,5]));
// function sumArray(arr){
//     return arr.reduce((a,b)=>a/b,0);

// }
// console.log(sumArray([1,2,3,4,5,]));

const operations = [
  { name: "Addition", value: "add", symbol: "+" },
  { name: "Subtraction", value: "subtract", symbol: "-" },
  { name: "Multiplication", value: "multiply", symbol: "*" },
  { name: "Division", value: "divide", symbol: "/" },
];
const operationSelect = document.getElementById("eu");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener('click', () =>{
     const operationValue = operationSelect.value; 
     const num1 = parseFloat(num1Input.value); 
     const num2 = parseFloat(num2Input.value);

     let calculationResult;

if (operationValue === 'add') {
    calculationResult = num1 + num2;
} else if (operationValue === 'subtract') {
    calculationResult = num1 - num2;
} else if (operationValue === 'multiply') {
    calculationResult = num1 * num2;
} else if (operationValue === 'divide') {
    calculationResult = num1 / num2;
} else {
    calculationResult = 'Invalid operation';
}

result.value = calculationResult;
});
 operations
 let array = [1, 2, 3];
array.forEach(function(a, index) {
    console.log(a);
});