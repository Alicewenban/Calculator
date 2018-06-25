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

function performOneArithmeticCalculation(){
    const op = getStringInput('Please enter the operator:');
    const nums = getNumArray(op);
    const result=doCalc(op,nums)
    console.log('The answer is: '+result);
}

function VowlObj(){ this.A=0;
                                this.I=0;
                                this.E=0;
                                this.O=0;
                                this.U=0;}
function countVowls(strg){
    var vowls = new VowlObj();
    for(i = 0; i < strg.length; i++){
        let c= strg[i];
        switch(c){
            case'A':
                vowls.A=vowls.A + 1 ;
            break;
            case'E':
                vowls.E=vowls.E + 1 ;
            break;
            case'I':
            vowls.I=vowls.I + 1 ;
            break;
            case'O':
            vowls.O=vowls.O + 1 ;
            break;
            case'U':
            vowls.U=vowls.U + 1 ;
            break;
        }

    }
    return vowls
}

function printvowls(vowls){
    console.log('The vowel counts are: \n\ A: '+ vowls.A+ ' \n\ E: '+ vowls.E+ ' \n\ I: '+ vowls.I+ ' \n\ O: '+ vowls.O+ ' \n\ U: '+ vowls.U );
}

function performOneVowelCountingCalculation(){
    var stg = new String(getStringInput('Please enter a string:'));
    var Ustg = stg.toUpperCase();
    var vowls =countVowls(Ustg);
    printvowls(vowls);


}


const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function getCalculationMode(){
    return getStringInput("Which calculator mode do you want? \n\ 1) Arithmetic \n\ 2) Vowel counting");
}
 
printWelcome();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
  }
}
