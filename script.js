let checker = 0;
let num1 = ``;
let num2 = ``;
let sum = ``;
let numEvent = document.getElementsByClassName('numPadNumber');

for(let i = 0; i < numEvent.length; i++){
    numEvent[i].addEventListener('click', function(){
        num1 += numEvent[i].innerText;
        sum = num1;
        document.getElementById('display-num').innerHTML = `${sum}`;
    })
}

function add(num1, num2){
    const sum = Number(num1) + Number(num2);
    return sum;
}

function subtract(num1, num2){
    const sum = Number(num1) - Number(num2);
    return sum;
}

function multiply(num1, num2){
    const sum = Number(num1) * Number(num2);
    return sum;
}

function divide(num1, num2){
    const sum = Number(num1) / Number(num2);
    return sum; 
}
