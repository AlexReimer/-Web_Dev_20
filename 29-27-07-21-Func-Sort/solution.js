/* Task01
   написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
   [2,5,7,9,7,2] -> [2,5,7,9]
   [2,0,0,1,1,2] -> [2,0,1]
 */

function arrayNoDouble(arr){
    const arrNumbers = [];
    for(let number of arr){
        if(!arrNumbers.includes(number)){
            arrNumbers.push(number);
        } 
    }
    return arrNumbers;
}
console.log(arrayNoDouble([2,5,7,9,7,2]));

//то же самле но короче. indexOf возвращает тольео первое значение
let array = [2,5,7,9,7,1];
const uniqArray = array.filter((elm, index)=>array.indexOf(elm)===index);
console.log(uniqArray);

//Task02
/* 
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
 */

let array = [2,5,7,9,7,1];  

function replaceValueArray(arr){
    const max = arr[0] > arr [arr.length-1] ? arr[0] : arr [arr.length-1];
    const newArr = [...arr]                     //arr.slice();
    return newArr.fill(max);
}
console.log(replaceValueArray(array)); // -> [ 2, 2, 2, 2, 2, 2 ]


/* function strangeArrChanger(arr) {
	const max = arr[0] > arr[arr.length-1] ? arr[0] : arr[arr.length-1]
	return arr.map(item => item = max)
} */



//Task03*
/* 
метод получает строку и символю возвращает количество посторений символа
 */

/* const countSymbol = function (str, char){
    const counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i]=== char);
        counter++;
    }
    return counter;
}
console.log(countSymbol('qfqfqfqad', 'q')) */


const countRepeatSymbol = function (str, char) {
    let counter = 0;
    return str.split('').forEach(item => {
        if (item === char) counter++
    })
}
console.log(countRepeatSymbol('qfqfqfqad', 'q'));


function countRepeatSymbol2(str, char) {
    return str.split('').filter(item => item == char).length
}

console.log(countRepeatSymbol2('qfqfqfqadqqq', 'q'));



function countRepeatSymbolWithReduce(str, char){
    return str.split('').reduce((count,s) => s==char ? char +=1 : count, 0)             //s - искомая буква, кот считаем ('q'); 0 в конце - это инициализация count = 0, если не прописать 0, то count инициализируется 'q', к которой потом попробует прибавить 1 (найденную 'q') и  выдаст NaN  - not a number (q+1..)
}
console.log(countRepeatSymbolWithReduce('qfqfqfqadqqq', 'q'));


//Посчитать повторяющиеся символы
// [1,2,2,4,5,5] 'tryerttt'   1245233567892
// 1245233567892 ->toString -> '1245233567892' ->split по 2-ке (symbol = 2) -> [1] [45] [3356789] [] - split сформирует из строки  массив из 4-х элементов (три по 2-ки и один пустой). То есть чтобы получить ответ - количество символов повторяющихся - item.split(symbol).length -1; длина массива минус 1 

function countRepeat(item, symbol){
    item = item.toString();
    symbol = symbol.toString();
    return item.split(symbol).length -1;
}

console.log(countRepeat(1245233567892, 2)) // -> 3 раза встречаются 2.ка
console.log(countRepeat([1,2,2,4,5,5], 5)) // -> 2
console.log(countRepeat('tryerttt', 't')) // -> 4
