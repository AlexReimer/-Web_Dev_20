const salaries = {
  John: 2000,
  Anna: 2100,
  Piotr: 2500,
  Kate: 1900,
};
//Task#1
//calculate and print sum of all salaries
let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
console.log(`All salary ist: ${sum}`);

//Task#2
//Variant 1
console.log(
  `John has salary: ${salaries.John}, Kate has salary: ${salaries.Kate}`
);

//Variant 2 - сгачала выяяняем кол.во элемнентов в объекте (каунтер + цикл )
let countOfKeys = 0;
for (let key in salaries) {
  countOfKeys++;
}
console.log(countOfKeys);
// через второй счетчик распечатываем первый и четвертый
let count = 0;
for (let key in salaries) {
  count++;
  if (count == 1 || count == countOfKeys) {
    console.log(`${key} has salary: ${salaries[key]}`);
  }
  if (count != 1 && count != countOfKeys) continue;
  console.log(`${key} has salary: ${salaries[key]}`);
}

//Task#4
//find employee mit max salary БЕЗ Math.max

let maxSalary = 0;
let keyName = "";

for (let key in salaries) {
  if (salaries[key] > maxSalary) {
    maxSalary = salaries[key];
    keyName = key;
  }
}
console.log(`Maximal salary has ${keyName}, ${maxSalary}`);

//вывести все ключи и згачение объекта 

/* for (let key in salaries) {
    console.log(``)
} */
