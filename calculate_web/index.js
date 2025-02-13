let num1;
let num2;
let result = 0;
let operation = 'null';
let tempOpr;

function setValue(new_operation) {
    num1 = parseFloat(document.getElementById('inputNum1').value);
    num2 = parseFloat(document.getElementById('inputNum2').value);

    operation = new_operation;
    switch(operation) {
        case 'p':
            tempOpr = '+';
            result = parseFloat(num1 + num2);
            break;
        case 'm':
            tempOpr = '-';
            result = parseFloat(num1 - num2);
            break;
        case 'mu':
            tempOpr = 'x';
            result = parseFloat(num1 * num2);
            break;
        case 'd':
            tempOpr = ':'
            result = parseFloat(num1 / num2);
            break;
    }
    
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    console.log('operation: ' + operation);
    console.log('result: ' + result);
}

function getResult() {
    document.getElementById('result_box').innerHTML = num1 + " " + tempOpr + " " + num2 + " = " + result;
}

function clearDisplay() {
    document.getElementById('result_box').innerHTML = 'your aswnser here';
}

function passValue() {
    window.location.href = 'result_page/result_page.html?num1=' + num1 + '&num2=' + num2 + '&opr=' + operation;
}