const readline = require('readline-sync');
console.log('Welcome to the calculator! \n\ ==========================');
console.log('Please enter the operator:');
const op = readline.prompt();
console.log('How many numbers do you want to ' +op+ '?')
const rep = readline.prompt();

var arr=Array(rep)
for (i = 0; i <= rep; i++) {
    var num = i+1;
    console.log('Please enter number '+ num +':');
    arr[i]=  parseInt(readline.prompt());
}

function performop(a,op,b) {
    switch(op){
        case'+':
            a=a+b ;
        break;
        case'*':
            a=a*b;
        break;
        case'/':
        a= a/b;
        break;
        case'-':
            a=a+b;
        break;
    }
return a;
}


var result= arr[0];

for (i = 1; i <= rep; i++) {
   console.log(result);
   result=performop(result,op,arr[i]);
}


console.log('The answer is: '+result);
