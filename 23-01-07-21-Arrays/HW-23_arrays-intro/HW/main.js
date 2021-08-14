//Task01
//fill the Pifagor-table
//*make the Pifagor-table for the browser

const multTable = [];
for(let i = 1; i <=10; i++){
    multTable.push([]);
    for(let j=1; j<=10; j++){
        multTable[i].push(i*j);
    }
    console.log(multTable);
    multTable = [];
}


//Task02
//С помощью цикла сформируйте строку n...9 8 7 6 5 4 3 2 1, где n - число получаемое от пользователя.
//выведите значение этой переменной на экран.

let n = prompt ('Enter some positive number: ');
for(let i = n; i >=1; i--){
console.log(i);
}
alert(n);

/* const arr = [];
arr.length = n;
console.log(arr.length);

for(let i = arr.length-1; i = 1; i--){
    console.log(i);
    alert = ('Reverse order from entered number to 1 is: ' + i);
} */


//Task03*
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))


let n = 10;
nextPrime:                      //метка
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; //метка перекидывает к метке выше
    }
    alert( i ); 
}

/* //let inputNum = prompt('Enter a positive number: ');
if(inputNum < 2) alert(false); 
for(let i=2; i<inputNum; i++){
    if(inputNum%i == 0) alert(false);
}
alert(inputNum>1); */
