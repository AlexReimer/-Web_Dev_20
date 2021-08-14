


//Task#2
//возведение в степень

//Вариант через стрелочную функцию
const powNumber = (a, b) => a ** b;
console.log(powNumber(5, 3)); // -> 125

//вариант 2 

function powerNumber(number, power){
    let result = 1;                    //любое чисдо в нудево    степени будут 1 
    for (let i = 0; i < power; i++){
        result += number;
    }
    return result;
}


//Максим нашел в сети код и не понимает 
/* let reverse = function (a) {
for (let i = 0, j = a.length - 1; i < j;)
    a[i] = a[j] + (a[j--] = a[i++], 0)
    return a;
    } */


console.log(powerNumber(5,3));

//Task03
/* 
const numbers = [2,4,6,10,12];
function sumNumbers(numbers) -> 34;
 */

const numbersOf = [2,4,6,10,12];

/* function sumArraysNumbers(array){
    let sum=0;
    for(let num of array){            //цикл для массивов
        sum += num;
    }
    return sum;
} */

function sumArraysNumbers(array){
    let sum=0;
    for(let num in array){
        sum += array[num];              //цикл для объектов 
    }
    return sum;
}

console.log(sumArraysNumbers(numbersOf));

//Task04*
/* 
const numbers = [1,2,3,4,5];
function reversArray(numbers) -> [5,4,3,2,1]
 */

//[1][2][3][4][5][6]   [6][5][4][3][2][1] 

let nums = [1,2,3,4,5];

function reverseArray(array){
    for (let i = 0; i < array.length/2; i++) {
        const temp = array[i];
        array[i] = array[array.length -1 -i];
        array[array.length -1 -i] = temp;
        
    }
}

console.log(nums);
reverseArray(nums);
console.log(nums);


function reverse(array){
    let reversArray =[];
    for(let i = array.length -1; i >= 0; i--){
        reversArray.push(array[i])
    }
    return reversArray;
}

const newArray = reverse(numbers);
console.log(newArray);
