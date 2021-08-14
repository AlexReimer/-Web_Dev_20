//Task01
/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/

//Task02
/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)
 */

let num = 10,
  sum = 0;

while (num > 1) {
  if (num % 2 == 0) {
    sum += num;
  }
  num--;
}
console.log(sum);

// то же через ТЕРНАРНЫЙ Оператор

sum = 0; num = 10;
while (num > 0) {
    sum = (num%2 !=0) ? sum +=num : sum; 
    num--;
}
console.log(sum);

//for loop (еще два способа к моему)
sum = 0; num = 10;

for(let count = 1; count<= num; count++){
    if(count%2 != 0) continue;
    sum += count;
}

for(let count = 2; count<= num; count+=2){
  sum += count;
}

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

/* const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = +prompt('Guess the number, my number is bigger as 0 and less 20');
let maxTryCount = 3;
let tryCount;

for(let tryCount = 1; tryCount <=3; tryCount++){
  if(guessNumber === userAnswer)
  alert('You win!');
  break;
}else if(userAnswer > guessNumber){
  alert('to big number')
}else() */


//то же но с while 

const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = +prompt('Guess the number, my number is bigger as 0 and less 20');
let maxTryCount = 3;

while(true){
  if(userAnswer == 'q' || userAnswer == null || maxTryCount == 0){
    alert(`Guess number ${guessNumber}`);
    break;
  }
  if(guessNumber == userAnswer){
    alert('you win!');
  }else if(userAnswer > guessNumber) {
    alert('to big number');
    maxTryCount--;
  }else{
    alert('to small number');
    maxTryCount--;
  }if(maxTryCount !=0){
    userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount}, try more`);
  }
}