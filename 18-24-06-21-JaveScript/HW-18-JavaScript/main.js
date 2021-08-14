// Tast01

let announcing1 = prompt('Ready for Task 1?', 'Yes/No');
let number1 = prompt('Enter first number, please:', 1);
let number2 = prompt('Enter second number, please:', 2); 
//let result = +number1 + +number2; 
let result = parseInt(number1) + parseInt(number2);
alert('The sum is: ' + result);
console.log(result);

//-------------

//Task02
let announcing2 = prompt('Ready for Task 2?', 'Yes/No');
let salaryHour = prompt ('What is a salary per hour?');
let workHoursDay = prompt ('How many hours a day do you work?');
/* let salaryMonth = parseInt(salaryHour) * parseInt(workHoursDay) * 22;
console.log(salaryMonth); */
alert('The monthly salary is: ' + parseInt(salaryHour) * parseInt(workHoursDay) * 22 + ',00 €');

//-------------

//Task03
const PI = 3.14;
let announcing3 = prompt('Want to know the area of a circle?', 'Yes/No');
let askForRadius = prompt('What is the circle´s radius?'); 
/* let zwischenResult = askForRadius * askForRadius * PI;
console.log(zwischenResult); */
alert('The radius of a circle is ≈ ' + PI * (askForRadius ** 2) + ' square cm.');
//alert('The radius of a circle is ' + (Math.pow(askForRadius,2) * Math.PI) + ' square cm.');
