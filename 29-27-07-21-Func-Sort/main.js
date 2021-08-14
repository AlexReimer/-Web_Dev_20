/* Функция,накапливающая числа, вводимые пользователем. Если ввод - не число, вывести сумму всех введеных до этого чисел */

//все в одном методе
function sumInput1(){
  let numbers = [],
      sum = 0;

 while(true){
      const userNumber = prompt('Enter the number, please');
      if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
          break;
      }
      numbers.push(+userNumber)
 }

 if(numbers.length == 0){
     return;цуй
 }

 for (let number of numbers){
      sum +=number;
 }

 return sum;

}


//===============================

//методы разделены
function sumInput2(){
  let numbers = []

 while(true){
      const userNumber = prompt('Enter the number, please');
      if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
          break;
      }
      numbers.push(+userNumber)
 }

 return sum(numbers);

}

function doSomethingWithInputArray(doSomething){
  let numbers = []

 while(true){
      const userNumber = prompt('Enter the number, please');
      if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
          break;
      }
      numbers.push(+userNumber)
 }

 return doSomething(numbers);

}

function sum(array){
  if(array.length == 0){
      return;
  }
  let sum = 0
  for (let el of array){
       sum += el;
  }
  return sum;
}

function changeElementInArray(array) {
  /* let newArray = [];
    for(let number of array ){
        newArray.push(number *=2)
    } */
  return array.map((num) => (num *= 2));
}

alert(sumInput2());
alert(doSomethingWithInputArray(sum));
alert(
  doSomethingWithInputArray((array) => array.filter((item) => item % 2 == 0))
);
alert(
  doSomethingWithInputArray((array) => array.reduce((sum, item) => sum + item))
);
alert(doSomethingWithInputArray(changeElementInArray));

//безымянная функция
alert(doSomethingWithInputArray(changeElementInArray));
alert(
  doSomethingWithInputArray(function (array) {
    return `your input is ${array.join("/ ")}`;
  })
);
//стрелочная функция (6.й стандарт) - такая же как выше безымянная
alert(
  doSomethingWithInputArray((array) => `your input is ${array.join("/ ")}`)
);
alert(doSomethingWithInputArray((array) => array.map((num) => (num += 3))));



// СОРТИРОВКА

let arr = [1, 2, 10, 12, 2, 3, 8, 11, 100];

//arr.sort(); //  по лексографике отсортирует а не по возрастанию . 100 будети первая
//console.log(arr);

//arr.sort(compare2);
arr.sort((a, b) => a - b);
console.log(arr);

//компаратор

function compare(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  if (a == b) return 0;
}

// то же самле через ТЕРНАРНАЫЙ
function compare1(a, b) {
  return a > b ? 1 : a < b ? -1 : 0; // if(a > b){return 1}else{if (a < b){return -1}else{return 0}}
}

//компаратор . то же самое, что выше в три строчки
function compare2(a, b) {
  return a - b;
}
