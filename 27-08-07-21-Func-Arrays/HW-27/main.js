/* Task01
    игра русско-английский словарь;
    // Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
    // и если пользователь ввел правильный перевод - удалять слово из массива
    // Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
    // Если ошибки были - показывать число сделанных ошибок, спросить не хотите повторить?
    // Спросить пользователя, хочет ли он перейти на следующий уровень?
    //Реализовать следующий уровень

    //Со звездочкой - реализовать возможность выбора языка
 */

    /* const dictArr = [
        ['hello', 'привет','hallo'],
        ['friend', 'друг','freund'],
        ['play', 'поиграем','spielen'],
        ['football', 'футбол','fußball'],
        ['yes', 'да','ja'],
        ['great', 'отлично', 'ausgezeichnet ']
    ];
    

    userTranslationCheck();
    
    function userTranslationCheck(arr){
        for(let i =0; i< dictArr.length; i++){
            const userTranslation = getUserTranslation (i);
        }
    }

    function getUserTranslation (index){
        return prompt(`how to translate ${dictArr[index]}`).toLowerCase();
    } */




//Task02
//1.Метод изменить строку 
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;   


let str1 = 'list-style-image'; 
//let strResult = str1.split('-').join(''); // -> liststyleimage
let strArr = str1.split('-'); // -> [ 'list', 'style', 'image' ]
console.log(strArr);

function joinToCamelCase(strArr){
    for(let i = 1; i <= strArr.length; i++ ){
        strArr[i] = strArr[i].toUpperCase();
    }
    return strArr.join('');
}

joinToCamelCase();



//2. Метод найти средннее арифметическое значение массива чисел

let arr2 = [1, 3, 5, 7, 9, 11];
let result = arr2.reduce((sum, current) => sum + current); //-> 36

console.log(result/arr2.length); // -> 6



//3. Factorial (5! -> 5 * 4 * 3 * 2 * 1) 

//Task03
/* users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 17},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]

1. Посчитать средний возраст users
2. Найти самого молодого
3. Найти самого старшего
4. Создать массив из юзеров, которые не живут в Италии
5. Создать массив из юзеров, которые старше 16, но младше 35
6. Создать отдельный массив из имен юзеров
7. Создать массив из юзеров, чьи имена начинаются на "М" 
 */

users =[
    {
        name: 'Anna', 
        address:{
            city:'Berlin', 
            country:'Germany'}, 
        age: 32},
    {
        name: 'Vasya', 
        address:{
            city:'Tokio', 
            country:'Japan'}, 
        age: 28},
    {
        name: 'Mariya', 
        address:{
            city:'London', 
            country:'England'}, 
        age: 17},
    {  
        name: 'Mark', 
        address:{
            city:'Rom', 
            country:'Italy'}, 
        age: 46},
    {
        name: 'Sofi', 
        address:{
            city:'Verona', 
            country:'Italy'}, 
        age: 38},
    {
        name: 'Sergio', 
        address:{
            city:'Barcelona', 
            country:'Spain'}, 
        age: 18}
]

//1. Посчитать средний возраст users
//let averageAge = users.age.reduce((sum, current) => sum + current)/users.length;
//console.log(averageAge);
let sum = 0; 
for (let key in users.age){
    sum += users.age[key];
}
let averageAge2 = sum / users.length;
alert (averageAge2);

//2. Найти самого молодого
let youngestAge = users.age.Math.min();
console.log(youngestAge);

//3. Найти самого старшего
let oldestAge = users.age.Math.max();
console.log(oldestAge);


