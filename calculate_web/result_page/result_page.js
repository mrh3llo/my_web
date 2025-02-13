let num1;
let num2;
let operation = 'null';
let tempOpr = 'null';
let result = 0;

function reciveValue(value) {
    const urlValue = new URLSearchParams(window.location.search);
    return urlValue.get(value);
}

num1 = parseFloat(reciveValue('num1'));
num2 = parseFloat(reciveValue('num2'));
operation = reciveValue('opr');

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

document.getElementById('result_box').innerHTML = num1 + " " + tempOpr + " " + num2 + " = " + result;

function clearDisplay() {
    document.getElementById('result_box').innerHTML = 'your aswnser here';
}