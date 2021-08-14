/* console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello'); */

//==========While========

let count = 5;
while (count > 0) {
  document.write("Hello! <br>");
  count--;
}

let i = 3;
while (i) {
  // в этом случае когда i=0 -> false -> конец цикла
  alert(i); //alert(i--);
  i--;
}

//==========Do-While========

let j = 1;

do {
  alert(j);
  j++;
} while (j < 4);

let numberLarge50;

do {
  numberLarge50 = prompt("enter number > 50");
} while (numberLarge50 <= 50 && numberLarge50); // && numberLarge50 -> на случай пустой строки или cancel(который null значит) или string, а не number



//==========For========

/* for (let i = 0; i <= 4; i++) {
  alert(i);
} */

//let i =1

/* for(let i = 1, j = 5; j > 0; i++, j--){
    alert('i = ' + i + ' j = ' + j);
} */


//==========break && continue========

let sum = 0; 

while(true){
    let value = +prompt('enter number'); //null->0 -> false, '' -> 0 -> false, 'aa' -> NaN -> false, '5' ->5 ->true
    if(!value){
        break;                         //помогает прервать цикл 
    }
    sum +=value;
}
alert('summe is: ' + sum);


for(let i=0; i<10; i++){
    if(i % 2 != 0) continue;    //выводим только четные числа
    alert(i); 
}

//==================
// num -> 5;
// summe = 1 + 2 + 3 + 4 + 5
let number, summe = 0; 

do{
    number = +prompt('enter number > 0'); 
}while(isNaN(number) || number <= 0); 

for (let i = 1; i <= number; i++){
    summe += i;
}

alert (summe);

//================

let answear = parseInt(Math.random() * 50);

alert(answear);

let a = 2.341678978;

alert('Hello\nworld!\n' + a.toFixed(2));