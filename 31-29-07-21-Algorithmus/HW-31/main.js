//Task01
// function getShortNames(arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark']  (lenght==4)    
// function getShortNames(namesArray, nameLength);

const arr = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi', 'John', 'Max'] 

function getShortNames(arrayNames){
    const name4Letters = [];
    console.log(name4Letters);
    for (let elm of arrayNames){
        if(elm.length <= 4) name4Letters.push(elm);
    }
    return name4Letters;
}
getShortNames(arr); // -> ['Anna', 'Mark', 'John', 'Max'] 
//console.log(getShortNames(arr));


function getShortNames2(namesArray, nameLength){
    const nameSomeLetters = [];
    console.log(nameSomeLetters);
    for (let elm of namesArray){
        if(elm.length <= nameLength) nameSomeLetters.push(elm);
    }
    //return name4Letters;
}
getShortNames2(arr, 3); // -> ['Max'] 

//Task02
/* 
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */

function getDivisors(num){
    const arrDivisors = [];
    console.log(arrDivisors);
    for(let i= 2; i<num; i++){
        if(num%i==0) arrDivisors.push(i);
    }
    return arrDivisors;
}
console.log(getDivisors(15));

//Task03*
/* 
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2  (recursion)
 */