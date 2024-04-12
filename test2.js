function calculator(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operatorOptions = document.getElementById("cal").options;
    let result;

    for (let i = 0; i < operatorOptions.length; i += 2) {
        let operator = operatorOptions[i].value;

        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator";
        }

        document.getElementById("result").value = result;
    }
}
