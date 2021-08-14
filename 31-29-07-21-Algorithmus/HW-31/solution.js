//Task01
// function getShortNames(arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark']  (lenght==4)    
// function getShortNames(namesArray, nameLength);

const arr = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi', 'John', 'Max'] 

function getShortNames (arrayName, nameLength){
    return  arrayName.filter(elm => elm.length == nameLength)
}
console.log(getShortNames(arr, 5));

//Task02
/* 
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */


function getDivisors(num){
    const arrDivisors = [];
    console.log(arrDivisors);
    for(let i= 2; i<num; i++){         // let i= 2; i<=Max.floor(num/2); i++
        if(num%i==0) arrDivisors.push(i);
    } return arrDivisors.length ? arrDivisors : num + ' is prime';
   /*  if(arrDivisors.length==0) {
        return num + ' is prime'
    } 
    return arrDivisors; */
}
console.log(getDivisors(13));


//Task03*
/* 
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2  (recursion)
 */

function sumDigitalNumber(numb){
  /*   if(numb < 10) {
        return numb;
    } return sumDigitalNumber(numb % 10 + Math.floor(numb/10)) */

    return numb < 10 ? numb : sumDigitalNumber(numb % 10 + Math.floor(numb/10))
}
console.log(sumDigitalNumber(10002345671)) //-> 2
// 13%10 = 3  13/10 = Math.floor(1.3)

// через перевод в строку 
function sumDigitallNumber3(num){
    return num < 10 ? num : sumDigitallNumber3(num.toString().split('').reduce((sum,number) => sum + parseInt(number), 0));
}

//вернуть общую сумму двух массивов 
function sumTwoArrays(array1, array2){
    let sum = 0; 
    for(let elm of array1){
        sum +=elm
    }
    for(let elm of array2){
        sum +=elm
    }
    return sum;
}
console.log(sumTwoArrays[1,2,3], [4,5]); 





// #32
//Task 1
/* 
'asklj djds daslkj qzqpaä lllxn' -> 4 (вернуть длинну самого короткого слова в строке)
 */

//Tesk2 
/* 
function isIsogram ('abcd') -> true 
function isIsogram ('abbcd') -> false 
function isIsogram ('abcdA') -> false 
 */


