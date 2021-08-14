//=============Type Conversion =============

//--------------------------------------------
//Number 

let str = '  z1234 '; // '12', '  90', '12.5' // -> NaN (not a number) если пробел и снова число '  123 0  '

// str = Number(str); Variant 1
//str = +str; // Variant2 -> same str = Number(str); // '12', '  90', '12.5' // -> NaN (not a number) если пробел и снова число '  123 0 
str = parseInt(str); // Variant3, НО с рвзличиями -> 1234z  -> 1234;  1234 5308 -> 1234;  z1234 -> NaN

console.log(typeof str);
console.log(str);

str = null; 
//str = Number(str); // null -> 0 если приводим через Number
str = parseInt(str); // null -> NaN

console.log(str);

//boolean преобразовывать 
str = false; // false -> 0; true -> 1

console.log(+str);
console.log(parseInt(str)); //str = false; // false -> NaN; true -> NaN

// undefined
str=undefined;

console.log('---------------------');
console.log(+str);
console.log(parseInt(str));

//--------------------------------------------
//String 

let value = true; 
console.log('--------------')
console.log(typeof value); // boolean

value = String(value); // value = '' + value; // string

console.log(typeof value); 

// false -> 'false'. null -> 'null', undefined -> 'undefined', 123 -> '123'

//--------------------------------------------
//Boolean 
console.log('--------------------');
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-5)); //true
console.log(Boolean('hello')); //true т.к. строка не пустая
console.log(Boolean('')); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false


//=============Comparison operators =============

// a > b, a < b
// a >= b, a <= b
// a == b, 
//a === b СТРОГОЕ СРАВНЕНИЕ
// != не равно 

console.log('--------------------');
console.log(5 < 3); // false
console.log(5 != 3); // true

let isBigger = 5 > 4; 
console.log('isBigger: ' + isBigger);//true

console.log('--------------------');
console.log('a' > 'q')//false
console.log('cat' > 'cad')//true
console.log('cat' > 'cats')//false
console.log('cat' > 'Cat')//true нижний регистр тяжелее  
console.log('cat' == 'tac')//false 

console.log('--------------------');
console.log('2' > 1)//true -> преобразует string в number 

let num1 = 42; 
let num2 = '42'; 

console.log(num1 == num2);//true 
console.log(num1 === num2);//false 

num1=0; 
str='';
let result = false;

console.log(str == result);//true
console.log(str === result);//false

console.log(null == undefined);//true


console.log('--------------------');
console.log(null>0);//false происходит приведение к ОДНОМУ типу и сравнивается 
console.log(null==0);//false при  НЕ строгом сравнении не будет приведение к одному типу 
console.log(null>=0);//true происходит приведение к ОДНОМУ типу и сравнивается 


//=============Conditional operators =============

//if, if else, ? (ternar)

num1 = +prompt('enter number');
num2 = +prompt('enter second number');

/* if(num1>num2){
    var max = num1;
    alert('Max number is: ' + max);
}else if (num1 === num2){
    alert('numbers are equal')
    //max = num1;
}
else (num2 > num1){
    max = num2;
    alert('Max number is: ' + max);
}

alert('Program ended'); */

let max = num1; 
/* if(num1<num2){
    max = num2;
} */

if(!num1>num2){
    max=num2;
}
alert('Max number is: ' + max);

if(0){                   //false
    console.log('Hello!')
}

if(''){                   //false
    console.log('world');
}

if(' '){                   //true
    console.log('world');
}

let isFieldChecked = true;
if(isFieldChecked){
    console.log('field is checked ')
}

// ? (ternar) ----------------------------

let isAccessAllowed; 
let age = +prompt('enter your age, please'); 
/* 
if(age>=18){
    isAccessAllowed =true;
}else{
    isAccessAllowed = false;
} */

isAccessAllowed = (age >=18) ? true : false;

//alert(isAccessAllowed);

/* if(age <= 3){
    alert('Hi, small one!');
} else if(age <= 20){
    alert('hi, middle one!')
} else if(age <= 100){
    alert('hello madam or sir!')
}else{
    alert('hello, lucky one!')
} */

/* let message = (age <=3) ? 'Hi, small one!' : 
              (age <=20) ? 'Hi, middle one!' : 
              (age <=100) ? 'hello madam or sir!' : 'hello, lucky one!'; */

//alert(message);

// alert((5>3) ? 'yes': 'no');

//Switch

/* switch(x){
    case 'one':
        alert ('Hello!');  // if(x==='one')
    case 'two':
        alert('Good bye!'); // if(x==='two')
    default:
        alert('nice to meet you!')
        
} */

let sumNumber = +prompt('2 + 2 = ?');

/*switch(sumNumber){
    case 3:
        alert('too little');
        break;
    case 5:
        alert('too much');
        break;
    case 4:
        alert('bingo!');
        break;
    default:
        alert('try again')
} */

/* switch(sumNumber){
    case 2:
    case 3:
    case 5:

        alert('wrong answear, try again');
        break;
    case 4:
        alert('bingo!');
        break;
    default:
        alert('try again!')    
    
} */




/* let userName = prompt('enter your name');

switch(userName){
    case 'Lena':
        alert('Hi, Lena!');
        break;
    case 'Vasya': 
        alert('Hi, Vasya!'); 
        break;
    default:
        alert("I don't know you!");
} */

//============== Logical operators============

// || -> or (или),   &&  -> and (и), ! -> not (не)

let hour = 9;

if(hour < 10 || hour > 18){
    console.log('shop is closed');
}

// false || false  -> false
// true || false   -> true
// false || true  -> true
// true || true -> true

hour = 12;
let minute = 30;

if(hour === 12 && minute === 30){
    console.log('The time is 12:30');
}

// true && true -> true;
// true && false -> false;
//false && true -> false;
//false && false -> false;

console.log(isFieldChecked);
console.log(!isFieldChecked);

//============Confirm=======

let isWeekend = confirm('Is a weekend now?');

alert(isWeekend);