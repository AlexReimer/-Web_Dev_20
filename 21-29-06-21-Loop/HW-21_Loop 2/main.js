//Task01
/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/

const inputRubl = +prompt("enter ruble amount");
const strRes = "The amount in ";
let rubleToEuro = inputRubl * 0.012;
let rubleToUsDoll = inputRubl * 0.014;
//console.log(rubleToEuro);
//console.log(rubleToUsDoll);

alert(
  strRes + "€" + " : " + rubleToUsDoll + "\n" + strRes + "$" + " : " + rubleToEuro
);

//------------------------

//Task02
/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)
 */

let inputNum = +prompt("Enter a number 1 to 100, please");
let evenSum = 0;

for (let i = 1; i <= inputNum; i++) {
   if (i % 2 == 0) {
    evenSum += i;
  }
}
alert('The sum of even numbers 2 to ' + inputNum + ":\n" + evenSum);

//------------------------

//Task03
/* Игра угадай число
    Случайным образом "загадать" число в диапозоне от 0 до 20
    Предложить пользователю угадать это число
        если введенный ответ больше загаданного числа - вывести сообщение: "загаданное число меньше"
        если ответ меньше - "загаданное число больше"
        если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 3 попыток, после неудачной попытки должно выводиться 
    на экран предложение ввести число еще раз, в этом сообщение указывается сколько попыток осталось.
    Если за пять попыток пользователь не угадал число - вывести сообщение: "Вы проиграли, число было:..."   
 */

const setRandomNum = parseInt(Math.random() * 20);
console.log(setRandomNum);
let guessRiddleNum = +prompt(
  "Guess the number we've conceived.\nYou have three attempts:"
);
let attemptCount = 0;
for (let i = 0; i <= 3; i++) {
 if (guessRiddleNum < setRandomNum) {
    attemptCount --;
    alert(
      "Wrong. Conceived number is smaller.\nYou have yet " +
        attemptCount +
        " attempts."
    );
  }else if(guessRiddleNum > setRandomNum){
    attemptCount --;
    alert(
      "Wrong. Conceived number is larger.\nYou have yet " +
        attemptCount +
        " attempts."
    );
  }else if (attemptCount == 0) {
    alert('You have no more attempts. Bye!')
    break;
  } else (guessRiddleNum == setRandomNum)
    alert("You've got it. Сongratulations!");
  
}

