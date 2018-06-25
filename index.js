const readline = require('readline-sync');
function printWelcome(){
    console.log('Welcome to the calculator! \n\ ==========================');
}
function getStringInput(prompt){
    console.log(prompt);
    return readline.prompt();
}
function getNumInput(prompt){
    let result
    do{
        result= parseInt(getStringInput(prompt));
    }while(isNaN(result))
    return result;

}

function getNumArray(op) {
    const rep = getNumInput('How many numbers do you want to ' + op + '?');
    let nums = new Array(rep);
    for (let i = 0; i < rep; i++) {
        nums[i] = getNumInput('Please enter number ' + (i + 1) + ':');
    }
    return nums;
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

function doCalc(op, nums) {
    let ans = nums[0];
    for (i = 1; i < nums.length; i++) {
        ans=performop(ans,op,nums[i]);
     }
    return ans;
}

function performOneCalculation(){
    const op = getStringInput('Please enter the operator:');
    const nums = getNumArray(op);
    const result=doCalc(op,nums)
    console.log('The answer is: '+result);
}


printWelcome();

do{
    performOneCalculation();
}while(true)

