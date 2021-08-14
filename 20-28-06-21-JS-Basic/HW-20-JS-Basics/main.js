/* Task01 
Запросить два числа, посчитать их сумму.
если, полученная сумма меньше 10 - вывести сообщение: "сумма слишком маленькая"
если сумма больше 10 - вывести сообщение: "сумма слишком большая"
если сумма равна 10 - "бинго!"
выполнить задание с использованием if и с использованием тернарного оператора (?) */

//Task01__if-else
let num1 = +prompt ('Please, enter first number');
let num2 = +prompt ('And the second, please'); 

if(num1+num2<10){
    alert('The sum of entered numbers is too small');
}else if(num1+num2>10){
    alert('The sum of entered numbers is too big');
}else{
    alert('Bingo!');
}
alert('Program ended');

//Task01__ternary operator 
//console.log(num1+num2);
let message = (num1+num2<10) ? 'The sum of entered numbers is too small' :
               (num1+num2>10) ? 'The sum of entered numbers is too big' : 
                               'Bingo!';
alert(message);
//console.log(message);

//=====================


/* Task02 
Запросить у пользователя логин.
если логин равен "employee" , вывести сообщение: "Hi employee!"
если логин - "boss", вывести сообщение: "Hello boss!"
если логин пустой - "no login"
во всех остальных случаях - "Hi user"
выполнить задание с использованием if и с использованием switch */

//Task02__if-else
let askForLogin = prompt('Enter your Login, please.', 'No login');
if(askForLogin == 'employee'){
    alert('Hi employee!');
}else if(askForLogin == 'boss'){
    alert('Hello boss!');
}else if(askForLogin == '' || askForLogin == 'No login'){
    alert('Hi user!');
} else{
    alert('Incorrect login, try again');
}
alert('Program ended');

//Task02__switch
switch(askForLogin){
    case 'employee':
        alert('Hi employee!');
        break;
    case 'boss':
        alert('Hello boss!');
        break;
    case 'No login':
    case '': 
        alert('Hi user!');
    default:
        alert('Incorrect login, try again');
}

//=====================

/* Task03 
Напишите условие if для проверки, что переменная age находится 
в диапазоне между 14 и 90 включительно.
Напишите условие if для проверки, что переменная age НЕ находится 
в диапазоне между 14 и 90 включительно. Напишите два варианта решения. */

let age = +prompt ('Enter your age, please.');
/* if(age >= 14 && age <=90){
    alert('You can play here, lucky.');
}else {
    alert('You don`t have permission to play Fortnite.')
} */ 

if(!(age >= 14 && age <= 90)) {
    alert('You don`t have permission to play Fortnite.');
} else {
    alert('Welcome to the Game!');
}



