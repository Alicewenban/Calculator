const readline = require('readline-sync');
console.log('Please enter a number:');
const numa = parseInt(readline.prompt());
console.log('Please enter a second number:');
const numb = parseInt(readline.prompt());
const mult = numa*numb;
console.log('The result of the multiplication is: '+mult);
