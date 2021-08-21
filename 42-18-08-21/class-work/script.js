//const now = new Date('2020-05-01'); //Fri May 01 2020 02:00:00 GMT+0200
//const now1 = new Date('2020/05/01'); //Fri May 01 2020 00:00:00 GMT+0200 
//const now2 = new Date('2020.05.01'); //Fri May 01 2020 00:00:00 GMT+0200 
//const now3 = new Date(2020, 5, 1); //Mon Jun 01 2020 00:00:00 GMT+0200 ОТСЧЕТ МЕСЯЦЕВ от 0 (январь)



/* console.log(now)
console.log(now1)
console.log(now2)
console.log(now3) */

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());
console.log(now.getTime()); // from Linux Time 1.1.70 ->1629273479756

now.setHours(20);//???
console.log(now)

//расчет времени выполнения операции END-STRART
//const start = new Date();
const start = Date.now();
for(let i=0; i<10000; i++){
    let some = i**3
}
//const end = new Date();
const end = Date.now();
console.log(`loop work time is: ${end-start} miliisecond`);

const deadline = new Date('2021-12-31');
const daysLeft = (deadline - new Date());
console.log(daysLeft);

const days = Math.floor(daysLeft/(24*60*60*1000));
console.log(days) //134 дня осталось до дедлайна
        hours = Math.floor(daysLeft/(60*60*1000)%24);
        minutes = Math.floor(daysLeft/(60*1000)%60);
        seconds = Math.floor((daysLeft/1000)%60);

console.log(days, hours, minutes, seconds) // 134 15 29 4