let numbers = [1, 2, 3, 4, 5];

console.log(numbers.reverse());
console.log(numbers);

let names = "Ivan, Anna, Olya";
let namesArray = names.split(", ");
console.log(namesArray);
let str = namesArray.join("-"); //'Ivan, Anna, Olya' -> Ivan-Anna-Olya
console.log(str);

//string to massiv, then reverse and join as string
console.log(str.split("").reverse().join("")); //->aylO-annA-navI
console.log("abcd".split("").reverse().join("")); //-> dcba

const letters = ["b", "c", "d", "f", "a"];
letters.sort(); //-> ["a", "b", "c", "d", "f"]
console.log(letters);

numbers = [2, 7, 1, 11, 15, 20, 21];
letters.sort(); //не сортирует????
console.log(numbers);

//объект в массив
const user = {
  name: "Vasya",
  age: 32,
  isMarried: true,
};

const keys = Object.keys(user);
console.log(keys.length); //-> 3

console.log(Object.values(user)); // -> (3) ["Vasya", 32, true]
console.log(Object.entries(user)); // ->
/* 
(3) [Array(2), Array(2), Array(2)]
0: (2) ["name", "Vasya"]
1: (2) ["age", 32]
2: (2) ["isMarried", true]
length: 3
 */

let num = numbers.map((item) => item + 3);
console.log(num);

const prices = {
  banana: 1,
  orange: 2,
  fish: 4,
};

// из объекта prices сформируется двухмерный массив
// [banana, 1], [orange, 2], [fish, 4]
//затем увеличиваем значения valúe  на сколько хотим

let doublePrice = Object.entries(prices).map(([key, value]) => [
  key,
  value * 2,
]); //умножаем на два
console.log(doublePrice);
/* 
3) [Array(2), Array(2), Array(2)]
0: (2) ["banana", 2]
1: (2) ["orange", 4]
2: (2) ["fish", 8]
 */

doublePrice = Object.fromEntries(doublePrice);
console.log(doublePrice);
/* 
{banana: 2, orange: 4, fish: 8}
banana: 2
fish: 8
orange: 4
*/

//References and Object copy
// примитивы хранаться в стэке, а в объекты в куче

let a = 10;
let b = 20;

function doSomething(a, b) {
  a *= a;
  console.log(a);
  b /= 4;
  console.log(b);
}

doSomething(a, b);

console.log(a, b);

let array = [1, 2, 3, 4, 5];

//array.forEach(num =>num*2);
//ниже абсолютный путь
array.forEach((num, index, array) => (array[index] = num * 2));
console.log(array); // -> [2, 4, 6, 8, 10]

function changeArray(arr) {
  /*  for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * 2;
    } */
  for (let num of arr) num *= 2;
}

//changeArray(array);
console.log(array); // -> [2, 4, 6, 8, 10]

const user1 = {
  name: "Vasya",
  age: 32,
  isMarried: true,
   adress:{
       city:'Berlin', 
       country:'germany'
   }
};

//const user2 = user1;
const user2 = {...user1}; //спрэд оператор ???
//console.log(user2==)

user2.name = "Petya";
console.log(user1); //{name: "Petya", age: 32, isMarried: true}
console.log(user2); //{name: "Petya", age: 32, isMarried: true}
user2.lastName = "Ivanov"; //добавляем поле со значением и динамич.увеличиваем объект
user2.adress.city = ('Paris');
console.log(user2); //{name: "Petya", age: 32, isMarried: true, lastName: "Ivanov"}

const oldArray = ["a", "b", "c"];
//const newArray = oldArray;
//const newArray = oldArray.slice();// ["a", "b", "c"]
const newArray = [...oldArray];   //спрэд оператор ???

newArray[3] = "d";

console.log(oldArray); //["a", "b", "c", "d"]
console.log(newArray); //["a", "b", "c", "d"]

function copyObject(obj) {
  //{name:'vasya', age: 23}
  const objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

const number = {
  a: 2,
  b: 3,
  //c: 5,
  c:{
      x:7,
      y:4
  }
};

const copyNumbers = copyObject(numbers);

copyNumbers.a = 10;
//copyNumbers.c.x = 10; // у меня не сработало, см. код преплда
console.log(numbers); //  [2, 7, 1, 11, 15, 20, 21]
console.log(copyNumbers); //{0: 2, 1: 7, 2: 1, 3: 11, 4: 15, 5: 20, 6: 21, a: 10}

//assign ?????
const copyNum = Object.assign(numbers, {e:12});
//numbers.c.x = 5;   // не сработало

console.log(copyNum, numbers, copyNumbers); //(7) [2, 7, 1, 11, 15, 20, 21, e: 12] (7) [2, 7, 1, 11, 15, 20, 21, e: 12] {0: 2, 1: 7, 2: 1, 3: 11, 4: 15, 5: 20, 6: 21, a: 10}

const client = {name:'Vasya'},
    permission1 = {canView:true},
    permission2 = {canEdit:true};


console.log(client); // {name: "Vasya"}
const client1 = Object.assign(client, permission1, permission2, {name: 'Petya', age: 25}); //новый объект изменит ВАсю на Петю ниже
console.log(client); //{name: "Vasya", canView: true, canEdit: true}
console.log(client1); //{name: "Vasya", canView: true, canEdit: true}

//SPREAD Spread operator 

const userNames = ['Anna', 'Vasya', 'Kolya'];
const cities = ['Berlin', 'Paris', 'Tokio'];
const all = [...userNames, ...cities, 'I like it'];

console.log(all); //(7) ["Anna", "Vasya", "Kolya", "Berlin", "Paris", "Tokio", "I like it"]

function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [2,5,7];
log(...nums); // 2 5 7 

const message = ['hello', 'nice to see you', 'good bye!'];

log(...message);
/* 
hello
nice to see you
good bye!
*/