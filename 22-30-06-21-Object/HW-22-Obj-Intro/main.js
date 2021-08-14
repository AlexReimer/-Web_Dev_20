let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900
}
//Task#1
//calculate and print sum of all salaries 
let summedSal = 0; 

for(let key in salaries){
    summedSal += salaries[key];
};
console.log(summedSal);




//-----------------------

//Task#2
//'John has salary: 2000, Kate has salary: 1900'
/* for(let key in salaries){
    if(salaries[key] === 'John'){
        console.log(`John has salary ${salaries[key]}`)
    }
}
 */


//Task#3
//add two employee in object 
salaries.Vasya = '2150';
salaries.Natalia = '2050';
console.log(salaries.Natalia);

//Task#4
//
let maxSal = 0;
for(let key in salaries){
    maxSal = Math.max(salaries[key], maxSal);
}
console.log(`Max salary has ${salaries_key}, ${salaries[key]} `)
//console.log(maxSal)
