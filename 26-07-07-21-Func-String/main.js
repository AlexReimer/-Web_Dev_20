const str = 'hello!\n\'world\' \u{1F60D}'  //"hello", 

let str2 = `hello world!`

/* // `hello!` -> обратные ковычки интерполяция позволяют выводить как хотим 
let str2 = `hello
    world!
*-----*`

console.log(str2);
console.log(str); */

console.log(str2[str2.length -1]);


//string - массив
console.log(str[3]); //->l [hello]

// массив, но 
str2[0] = 'H';       //не заменит 'h' на 'H' тк строка не изменяемая. каждый раз создается новая строка

//длина строки 
console.log(str.length); 

str2 = 'Hello world wow!';
console.log(str2);


const numbers = [1,2,3,4,5]
numbers[0] = 5;             // ->[5,2,3,4,5] массив легко менятеся, а строка создается заново

console.log(str2.charAt(6));

str2 = str2.toUpperCase(); // HELLO WORLD!
str2 = str2.toLowerCase()  //hello world!

console.log(str2);

//'Hello world wow!'
console.log(str2.indexOf('w')); //-> 6 выдаст первое вхождение 
console.log(str2.indexOf('w', 7)); // -> 12 - второй парамертр откуда начинать искать 
console.log(str2.startsWith('hello')); // -> true
console.log(str2.endsWith('wow')); // -> false
console.log(str2.endsWith('!')); // -> true
console.log(str2.includes('wor')); // -> true
console.log(str2.includes('Wor')); // -> false -> case sensitive



console.log('-------------------'); 
// 'Hello world wow!' - выразеть от 2 включительно до 7 не включая
console.log(str2.slice(2,7)); // -> llo w
console.log(str2.slice(-6,-2)); // -> d wo

console.log(str2.substring(6,11)); // -> world
console.log(str2.substring(11,6)); // -> world поймет что мы хотим 
console.log(str2.substr(6,3)); // -> wor - index откуда и сколько символов

str2 = 'Hello world wow!';
str2 = str2.replace('e', 'a') // -> hallo world wow! заменит ТОЛЬКО 1-е вхождение
console.log(str2);

str2 = str2.replaceAll('w','W') // -> hallo World WoW!! заменит все вхождения
console.log(str2);

str2 = str2.replace('wo','WWWWW') // -> hallo WWWWW WWWWW!! заменит все вхождения НЕ СРАБОТАЛО
console.log(str2);

let names = 'Ivan, Anna, Vasya, Olja, Petya';
let nameArray = names.split(', '); // //разрежет и ВОЗВРАЩАЕТ массив
console.log(nameArray[0], nameArray); 
/* 
(5) ["Ivan", "Anna", "Vasya", "Olja", "Petya"]
0: "Ivan"
1: "Anna"
2: "Vasya"
3: "Olja"
4: "Petya"
length: 5
__proto__: Array(0)
 */

const arrayLetters = 'apple'.split(''); //разрежет посимвольно и ВОЗВРАЩАЕТ массив
console.log(arrayLetters); // -> ["a", "p", "p", "l", "e"]

//Arrays
let num = [1,2,3,4];

/* delete num [1];
console.log(num);  // ->  [1, empty, 3, 4] */

num.splice(1,2); //[1,2,3,4] -> [1, 4] // 1,2 - откуда начинаем и сколько удаляем 
console.log(num);

num.splice(1,2,5,6,7,8); // -> [1, 5, 6, 7, 8] 1,2 откуда начинаем,cколько удаляем, 5,6,7,8 что вставляем на это место
console.log(num);

const num1 = num.slice(1,3); // -> (2) [5, 6]

console.log(num1);

/* const newNums = num.concat(num1);
console.log(newNums); */              // -> (7) [1, 5, 6, 7, 8, 5, 6]

const newNums = num.concat(num1, 6,7, num1);
console.log(newNums);              // -> (11) [1, 5, 6, 7, 8, 5, 6, 6, 7, 5, 6]

//num.forEach(item => console.log(item*2)); 
/* [1, 5, 6, 7, 8] console
2
10
12
14
16
*/

num.forEach((element, index, array) => console.log(`${element} has index ${index}, in ${array}`))
/* console
1 has index 0, in 1,5,6,7,8
5 has index 1, in 1,5,6,7,8
6 has index 2, in 1,5,6,7,8
7 has index 3, in 1,5,6,7,8
8 has index 4, in 1,5,6,7,8
*/

//method find вернет ТОЛЬКО первое вхождение 
let users = [
{id:1, name:'Vasya'},
{id:2, name:'Anna'},
{id:3, name:'Vanya'},
]

let user = users.find(item => item.id == 1); //-> {id: 1, name: "Vasya"}   тут ищем по id объекта, можем по name
console.log(user);

let user1 = users.find(item => item.name == 'Anna'); //-> {id: 2, name: "Anna"}  тут ищем по id объекта, можем по name
console.log(user1);

//метод filter веренет все вхожнения

let usersWithLongName = users.filter(user =>user.name.length >=5);
console.log(usersWithLongName);   
/* 0: {id: 1, name: "Vasya"}
1: {id: 3, name: "Vanya"} */


//метод map - для выцепления даных и сохдание из них нового массива

num = [1,2,3,4];
let newNumbers = num.map(num => num * 2); // -> [2, 4, 6, 8]
console.log(newNumbers);

const cites = ['Berlin', 'London', 'Paris', 'Moscow'];
const citiesLength = cites.map(city => city.length); // -> [6, 6, 5, 6] выцепили длинну едементов в массиве
console.log(citiesLength); 

//метод reduce - накопитель

num = [1,2,3,4,5];
//let result = num.reduce((sum, current) => sum + current); // -> 15
let result = num.reduce((sum, current) => sum + current, 10); // -> 25 начнет суммировать с 10: 10 + 1 +... = 25; может быть переменная, пришедшая откуда-то
console.log(result);

let strings = ['one', 'two', 'three'];
result = strings.reduce((str, s) => str + ' ' + s); //one two three

console.log(result);

//task01
// сделать в домашке все методы кроме start() personalMovieDB сдалать методами объекта

//Task02
/* написать функцию, укорачивающуу строку 
    function stringCat(str, maxLength);

    z.B
    stringCat('hello world', 5) _> "hello..." если больше 5 симв. то обрезать и добавить '...'
    stringCat('hello', 5) _> "hello" //если короче . вернуть изначальную строку
 */

//Task03
/* 
игра русско.английский словарь;
двухмерный массив  с парами слов (5 пар слов)
справшиваем польз. перевод англ. слова из массива, если правильно, вывод "отлично"
если нет - правильный английский перевод
(цикл - показ англ. слова, седи перевол правильный, то ..., нет - показ перевод)
англ. слова напр. по четному 
 */












