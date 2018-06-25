const readline = require('readline-sync');
console.log('Welcome to the calculator! \n\ ==========================');
console.log('Please enter the operator:');
const op = readline.prompt();
console.log('Please enter the first number:');
const numa = parseInt(readline.prompt());
console.log('Please enter the second number:');
const numb = parseInt(readline.prompt());
var result;
switch(op){
    case'+':
        result= numa+numb;
    break;
    case'*':
        result= numa*numb;
    break;
    case'/':
       result= numa/numb;
    break;
    case'-':
        result= numa+numb;
    break;

}


console.log('The answer is: '+result);
