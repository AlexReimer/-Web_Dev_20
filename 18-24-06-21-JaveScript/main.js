/* Komment example 
in two line */

// one line comment

//==========
//Variables
//==========

// three options to declare variable
var age = 25;
let message = "hello from main-js!";
const PI = 3.14;

let news, title, article;
const WHITE = "white", RED = "#2098";

//Declaration
let userName;

//Initialosation
userName = 'Vasya';

//message = "hello world!"
// PI = 2;

console.log(message);
//alert('Good bye!');

console.log(message);

//naming 

//good
let nameUser // <-; user_name <- snake_case
let message_12_user;
let user12;
let $;
let _;

//bad
let имя;
let imya; 
let ff44; 

//can not use 

/* let 3name; 
let g&name;
let let;  */


//==============
//Data type
//==============

//Number 
let userAge = 25;
let a = 12.56;

console.log(0.2 - 0.1);
console.log(0.3 - 0.2);

//alert(1/0); // -> Infinity
alert('one'/1); // -> NaN <- (2+5) * 'one'

//BigInt

//String 

let string1 = 'Hello!';
    string1 = 23;       // динамическая типизация
let string2 = "Vasya";
let string3 = `Hello`;

alert(`Hello, ${string2}`); // backtick (`)  шаблонизатор 
//alert('Hello, ${string2}'); // НЕ шаблонизатор 
alert(`summe 1 +2 = ${1 + 2}`) //шаблонизатор 

//Boolean
let nameFiledChecked = true; 

let isGrater = 4 > 1; // true

console.log(isGrater);

//----------------
//Null

let year = null;

let currentAge = prompt('enter your current age');

console.log(currentAge); 


//-------------
//Undefind

let dog;
console.log(dog);


//---------------
//Object, Symbol, function

//---------------

let x = 12; 
let y = 912109840989870987587646198223409824409; 
const MONTH = 'july'; 
let isWeekend = false;
let price = null; 
let cat; 


console.log(typeof x);
console.log(typeof y);
console.log(typeof MONTH);
console.log(typeof isWeekend);
console.log(typeof price);
console.log(typeof cat);
console.log(typeof alert);

//=============
//Operators
//=============

let с = 5; // присвоение 
let d = 10; 

// + - + / %  binary operators 

c = 5%3; 

console.log(c);

let str1 = 'hello, '; 
let str2 = 'world!'; 
console.log(str1 + str2); 

console.log(str1 + false);
console.log( 5 + 6 + str1); //11hello,/*  */
console.log(str1+ 5 + 6); //hello, 56
console.log(str1+ (5 + 6)); //hello, 11

//unary operators 
let counter = 5; 
let newCounter = --counter;

console.log(counter);
console.log(newCounter);

console.log(2* counter);
console.log(newCounter);

//========================

let num1 = prompt('enter number, please');
let num2 = prompt('enter second number, please'); 

let result = num1*num2; 

alert('Multiplication, result is: ' + result);

/* num1 = parseInt(num1);
num2 = parseInt(num2); */
result = +num1 + +num2; // same as parseInt

alert('Summe is: ' + result); 


