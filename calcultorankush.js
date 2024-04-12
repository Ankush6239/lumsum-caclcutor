// const operationsArray = ['select value','add', 'subtract', 'multiply', 'divide'];

// function addOption(value) {
//   const calculator = document.getElementById('calculator');
//   const option = document.createElement('option');
//   option.value = value;
//   option.textContent = value;
//   calculator.appendChild(option);
// }

// function createOptions() {
//   for (const operation of operationsArray) {
//     addOption(operation);
//   }
// }

// function calculate(operation, num1, num2) {
//   let result;
//   switch (operation) {
//     case 'add':
//       result = num1 + num2;
//       break;
//     case 'subtract':
//       result = num1 - num2;
//       break;
//     case 'multiply':
//       result = num1 * num2;
//       break;
//     case 'divide':
//       if (num2 === 0) {
//         return 'Error: Division by zero is not allowed.';
//       }
//       result = num1 / num2;
//       break;
//     default:
//       return 'Error: Invalid operation.';
//   }
//   return result;
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const num1 = parseFloat(document.getElementById('num1').value);
//   const num2 = parseFloat(document.getElementById('num2').value);
//   const calculator = document.getElementById('calculator');
//   const operation = calculator.value;
//   const result = document.getElementById('result');

//   if (isNaN(num1) || isNaN(num2)) {
//     return (result.value = 'Error: Please enter valid numbers.');
//   }

//   const calculatedValue = calculate(operation, num1, num2);

//   if (typeof calculatedValue === 'string') {
//     return (result.value = calculatedValue);
//   }

//   result.value = calculatedValue;
// }

// // Initialize
// createOptions();
// document.getElementById('btn').addEventListener('click', handleFormSubmit);

const operationsArray = ['select value', 'add','subtract','multiply','divide'];

        function addOption(value){
            const calculator = document.getElementById('calculator');
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            calculator.appendChild(option);
        }

        function createOptions(){  
            for(const operation of operationsArray){
                addOption(operation);
            }
        }

        function calculate(operation, num1, num2){
            let result;
            switch(operation){
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                    break;
                default:
                    result = 'Invalid operation';
            }
            return result;
        }

        function handleFormSubmit(event){
            event.preventDefault();
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const operation = document.getElementById("calculator").value;
            const result = document.getElementById("result");

            if(isNaN(num1) || isNaN(num2)){
                return result.value = 'Error: Please enter valid numbers.';
            }

            if(operation === 'select value'){
                return result.value = 'Please select an operation.';
            }

            const calculatedValue = calculate(operation, num1, num2);

            if(typeof calculatedValue === 'string'){
                return result.value = calculatedValue;
            }

            result.value = calculatedValue;
        }

        // Initialize
        createOptions();
        document.getElementById('btn').addEventListener('click', handleFormSubmit);

