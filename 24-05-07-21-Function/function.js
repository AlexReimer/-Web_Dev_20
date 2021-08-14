let num = 20;

function showMessage(text){
    //console.log('hello')
    console.log(text);
   // num = 10;         // 10
    let num = 10;
    console.log(num);  //10 - num lokal variable
}

showMessage('hello');
showMessage('world');
showMessage();   //undefind выдаст, в отличии от java не поламается

let message = 'Hello world!'; 
showMessage(message);


console.log(num); // 20

//alert('hello');

function showUserMessage (from, text){
    alert(from + ': ' + text);
}

let userName = 'Vasja'

showUserMessage(userName, 3); 
showUserMessage('Anna', 'Hi! How are you?!'); 

function showPrettyMessage(from, text){
    from = '*' + from + '*';
    alert(from + ': ' + text);
}

showPrettyMessage(userName, 'Nice to see you!');
alert(userName);

function sum(a, b){
    let sum =  a + b; 
    return sum;
}

let result = sum(5,6);

console.log(sum(20,34));
console.log(sum(20,34) + result);
console.log(result);

function checkAge(age){
    if(age>18){
        return true;
    }else{
        return confirm('Parents allow?');
    }
}

function checkAge(age){
/*   if(age>18){
        return true;
    }else{
        return false;
    } */
    return(age>18) ? true : false;
}

function showMovie(age){
    if(checkAge(age)){
        alert('You can show the movie...')
    }else{
        alert('No permission')
    }
}

let ageUser = +prompt('enter your age');

showMovie(ageUser);

//function declaration - выше 


//function expression
//тут использовать const NOT let
const logger = function(){
    console.log('hello');
}
logger();
    
//function expression
const show = function(age){
    if(checkAge(age)){
        alert('You show movie...')
    }else{
        alert('No permission')
    }
}


//CALL BACK -> в метод в качестве пареметра можно передавать МЕТОД 
function learnLanguage(lang, callback){
    console.log(`I learn: ${lang}`);
    callback();
}

function showText(){
    console.log('I like it');
}

//высзывая метод в методе не ставим в вызываемом курглые скобки
learnLanguage('JavaScript', showText);
//другой способ вызова метода в методе -> прописываем метод и логику
learnLanguage('English', function(){console.log("It is very hard")});
// как нельзя -> тк тут я прописал что второй параметр фукция 
/* function learnLanguage(lang, callback){
  console.log(`I learn: ${lang}`);
  callback(); */
//но второй агумент тут не фунция 
learnLanguage('JavaScript', 'one');

function askAgree(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

askAgree('Are you agree?', function(){alert('You agree')}, function(){alert("You don't agree")
})


// СТРЕЛОЧНАЯ ФУНКЦИЯ (=>) - у них нет контекста вызова

/* const calc = (a,b) => {
    a *=2;
    b +=5;
    return a +b;
} */
//укороченная запись 
const calc = (a,b) => b-a; //использ. если простая логика 
console.log(calc(4,6));
