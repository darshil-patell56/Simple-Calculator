// Selecting HTML elements
let io = document.getElementById('io') 
//numbers 
var num1,num2;
var signToRemove,sign;
// Calculation
function blank(){
    io.innerHTML = ""; 
}
function bkspace(){
    io.innerHTML = io.innerHTML.slice(0,-1);
}
function divide(){
    num1=io.innerHTML;
    io.innerHTML = '÷'
    signToRemove = '÷'
    sign = '/'
}
function multiply(){
    num1=io.innerHTML;
    io.innerHTML = 'x'
    signToRemove = 'x'
    sign = '*'
}
function minus(){
    num1=io.innerHTML;
    io.innerHTML = '-'
    signToRemove = '-'
    sign = '-'
}
function addition(){
    num1=io.innerHTML;
    io.innerHTML = '+'
    signToRemove = '+'
    sign = '+'
}

// Print
function printDot(){
    io.innerHTML=io.innerHTML+"."
}
function print1(){
    io.innerHTML=io.innerHTML+"1"
}
function print2(){
    io.innerHTML=io.innerHTML+"2"
}
function print3(){
    io.innerHTML=io.innerHTML+"3"
}
function print4(){
    io.innerHTML=io.innerHTML+"4"
}
function print5(){
    io.innerHTML=io.innerHTML+"5"
}
function print6(){
    io.innerHTML=io.innerHTML+"6"
}
function print7(){
    io.innerHTML=io.innerHTML+"7"
}
function print8(){
    io.innerHTML=io.innerHTML+"8"
}
function print9(){
    io.innerHTML=io.innerHTML+"9"
}
function print0(){
    io.innerHTML=io.innerHTML+"0"
}

function calculate(){
num2 = io.innerHTML.replace(signToRemove,'');
num1 = parseInt(num1);
num2 = parseInt(num2);
switch(sign){
    case '/':
        io.innerHTML=num1/num2;
        break;
    case '*':
        io.innerHTML=num1*num2;
        break;
    case '-':
        io.innerHTML=num1-num2;
        break;
    case '+':
        io.innerHTML=num1+num2;
        break;
}
}