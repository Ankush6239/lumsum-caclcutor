document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultInput = document.getElementById('result');
    const result1Input = document.getElementById('result1');
    const result2Input = document.getElementById('result2');
    const result3Input = document.getElementById('result3');

    function updateResults() {
        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;

        resultInput.value = num1 + num2;
        result1Input.value = num1 - num2;
        result2Input.value = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        result3Input.value = num1 * num2;
    }

    num1Input.addEventListener('input', updateResults);
    num2Input.addEventListener('input', updateResults);

   
    updateResults();
});
