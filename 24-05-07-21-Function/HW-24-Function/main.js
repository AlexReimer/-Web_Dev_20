//Task#2
//возведение в степень

//Вариант через стрелочную функцию
const powNumber = (num, exponent) => num ** exponent;
console.log(powNumber(5, 3)); // -> 125

//Task03
/* 
const numbers = [2,4,6,10,12];
function sumNumbers(numbers) -> 34;
 */

function sumNumbers(numbers) {
  let res = 0;
  for (dig in numbers) {
    res += numbers[dig];
  }
  return res;
}

const arrOfNum = [2, 6, 10, 14, 18, 22]; // -> 72
let sum = sumNumbers(arrOfNum);

console.log(sum);

//Task04*
/* 
const numbers = [1,2,3,4,5];
function reversArray(numbers) -> [5,4,3,2,1]
 */

function reversArray(numbers) {
  let arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    return arr[i];
  }
}

const numb = [1, 2, 3, 4, 5];
let revArr = reversArray(numb);

console.log(revArr);
