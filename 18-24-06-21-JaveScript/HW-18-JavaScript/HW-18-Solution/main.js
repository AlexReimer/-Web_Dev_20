// Task01 Make code correct

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

//alert(a + b); //12

//a=+a;
let summe = a + b; 
console.log(typeof a);

alert(summe);

//===================
//Task02
//

let pricePerHour, 
    countHoursPerDay; 
const workDaysPerMonth = 22;

    pricePerHour = prompt('enter price per day');
    countHoursPerDay = prompt('Enter count of hours per day');
// Number как объект парсит как и + 
// знак * говорит системе, что умножаю, значит переведи String в Number
 //   let salary = Number(pricePerHour) * Number(countHoursPerDay) * 22;

    let salary = pricePerHour * countHoursPerDay * workDaysPerMonth;

    alert('your salary is: ' + salary);

//===================
//Task03

const PI = 3.14;
const radius = Number(prompt ('Enter radius '));

let circleSquare = PI * radius ** 2;

alert("Result: " + circleSquare);