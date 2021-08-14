// Number

let billion = 1e9; //1000000000;

let bigNumber = 7.3e9; //7300000000

let ms =3e-3;          // 0.003    // 1e-6; -> 0.000001 
let mss = 1 + 3e-3;       // 1.003


console.log(billion);
console.log(bigNumber);
console.log(ms);
console.log(mss);


console.log(0xff);   // -> 255 шестнадцатиричная система 
console.log(0b1111111);   // -> 127 в двоичной
console.log(0o377);   // -> 127 в восьмиричной


let num = 255; 
console.log(typeof num); //->number
/* num = num.toString();
console.log(typeof num); //-> string */

console.log(num.toString(16)) // -> ff - перевод в 16-тиричную систему

console.log(num.toString(10)) // -> 255 перевод в 2-ную систему

console.log(num.toString(2)) // -> 11111111 перевод в 10-тиричную систему


Math.randomRangeArray = function (arraySize, numberRange){
        let array = [];
        for (let i = 0; i < arraySize; i++) {
            array.push(parseInt(Math.random() * numberRange));  
        }
        return array;
}

const arr = Math.randomRangeArray(4,10);
console.log(arr);

let sum = 0.1 + 0.2;
console.log (sum.toFixed(2));


console.log (9999999999999999); // -> 10000000000000000 -> JS не очень точен 

console.log(123456..toString(2)); // -> 11110001001000000 - в 2-ной системе
console.log(12.2345.toFixed(2)); // -> 12.23 

num = '2px';
console.log(typeof num); //-> string
//num = Number(num);
num = parseInt(num);
console.log(typeof num); //-> number
console.log(num);        //-> 2


num = '22.24.34 px';
console.log(typeof num); //-> string
//num = Number(num);
num = parseInt(num);
console.log(typeof num); //-> number
console.log(num);        //-> 22

num = 'ff'; 
console.log(parseInt (num,16)); //->255


num = '111101'; 
console.log(parseInt (num,2)); //->61 двоичная в десятиричную 

function randomInteger(min, max){ //вводим min чтобы диапазон был не от нуля
    return Math.floor(min + Math.random() * (max - min + 1)); // 0, 3,4 ...9 -> 0+3, 3+3.. чтобы не было 9+3 и не вышди из диапазона
    // Math.floor округляет вниз
}

//( (max + 0.5) - (min - 0.5) ) -> max + 0.5 - min + 0.5 -> max - min +  1


num = randomInteger(1,4);
console.log(num);

// если Math.floor округлдение
// 1 - 1.499999 -> 1
// 1.5 - 2.499999 -> 2
// 2.5 - 2.999999 -> 3

//Math.floor -> 3.1 -> 3.0
//Math.ceil  -> 3.1 -> 4.0
//Math.round  -> 3.1 -> 3.0; 3.6 -> 4.0
//Math.trunc  -> 3.1 -> 3.0; 3.7 -> 3.0

const person = {
    name:'Vasya',
    age: 32,
    isMarrige: true, 
    say: function(){
        console.log('Hello');
    }
}

person.say();