//Task 1
/* 
'asklj djds daslkj qzqpaä lllxn' -> 4 (вернуть длинну самого короткого слова в строке)
 */

const str = 'asklj djds daslkj qzqpaä lllxn';
let smallElm; 

function shortestString (strng){
    let tempArr = strng.split(' ');
    for(let i=0; i<=tempArr.length; i++){
        if(tempArr.length[i] < tempArr.length[i+1]){
            smallElm = tempArr.length[i];
        }
    }
    return smallElm.length;
}
console.log(shortestString(str));


//Tesk2 
/* 
function isIsogram ('abcd') -> true 
function isIsogram ('abbcd') -> false 
function isIsogram ('abcdA') -> false 
 */

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

console.log(isIsogram('abcd'))
console.log(isIsogram('abbcd'))
console.log(isIsogram('abcdA'))