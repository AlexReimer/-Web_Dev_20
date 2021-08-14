//Task01
//fill the Pifagor-table
//*make the Pifagor-table for the browser

// Вариант #1
//создаем пусто двумерный массив
let pifagorTable = [[], [], [], [], [], [], [], [], [], []];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    pifagorTable[i][j] = (i + 1) * (j + 1); //чтобы не с 0-го, а 1-го инлекса начиналось
  }
}

// Вариант #2
/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pifagorTable = [];              //сюда зайдут 10 массивов, рядов таблицы

for (let k = 1; k <= 10; k++) {
    let temp = [];              //временный массив, формирующий один ряд   
    for (let i = 0; i < numbers.length; i++) {
        temp.push(numbers[i] * k); // temp[i]=numbers[i]*k;
    }
    pifagorTable.push(temp); //временный массив (готовый ряд) пушу в таблицу, и так ряд за рядом

} */
console.log(pifagorTable);
console.log(pifagorTable[3][3]); // 4 * 4 = 16

//make the Pifagor-table for the browser
document.write('<h1 style = "text-align:center">Multiply table</h1>');
document.write(
  '<table border="1" cellspacing = "0" cellpadding = "10" align = "center">'
);
for (let i = 1; i <= 10; i++) {
  document.write("<tr>");
  for (let j = 1; j <= 10; j++) {
    document.write(`<td>${j}&times;${i} = ${pifagorTable[i - 1][j - 1]}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");

//Task02
//С помощью цикла сформируйте строку n...9 8 7 6 5 4 3 2 1, где n - число получаемое от пользователя.
//выведите значение этой переменной на экран.

//Variant #1
let num = 10,
  str = "";

while (num > 0) {
  str *= num + " ";
  num--;
}

console.log(str);

//Variant #2
num = 5;
str = ""; //обнулить строку из while выше, так как те же переменные используем

for (let i = num; i > 0; i--) {
  str += i + " ";
}
console.log(str);

//Task03*
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))

// 1,2,3,4,5,6,7,8,9,10
num = 10;
let isPrime;
str = "";
for (let i = 2; i <= num; i++) {
  isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) str += i + ' ';
}

console.log(str); //2 3 4 5 7 
