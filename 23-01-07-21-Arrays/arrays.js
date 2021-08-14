//let arr = new Array(); //редко так

//В МАССИВЕ В JS МОГУТ ХРАНРТЬСЯ РАЗДИЧНЫЕ ТИПЫ ДАННЫХ
        //  [0]       [1] [2] [3]  [4]           [5]
let arr = ['plum.png', 1, {}, [], 'orange.png', 'apple.jpg'];

console.log(arr[0]);
console.log(arr.length);

/* arr[99] = 0; 
console.log(arr.length);
console.log(arr); */

//add elelement to end
arr[arr.length] = 'banan.jpg'; // arr[6] = 'banan.jpg'
console.log(arr);

//delete LAST element 
arr.length = arr.length-1;
console.log(arr);

//delete array complete
/* arr.length = 0; 
console.log(arr); */

// add element to INDEX 0 
// [2] [3]  [4]  [] 
// arr[0] = 'banan.jpg'
for(let i = arr.length; i > 0; i--){
    arr[i] = arr [i-1];
}

arr[0] = 'banan.jpg';
console.log(arr);

// ??? delete element to INDEX 0 и здвиг всегг налево
for(let i = 0; i > arr.length; i++){
    arr[i] = arr [i+1];
}

arr.length = arr.length -1; 
console.log(arr);

// add element to END
arr.push('banan.jpg', 23, 'melen.jpg');
console.log(arr);

//delete END element and REturns it 
arr.pop(); 
console.log(arr);

//save deleted END-element and REturns it 
let melon = arr.pop(); 
console.log(arr);
console.log(melon);

//Die unshift() Methode fügt ein oder mehrere Elemente am Anfang eines Array hinzu und gibt die neue Länge des Arrays zurück.
arr.unshift(25,30);
console.log(arr);

//Methode shift() entfernt das erste Element eines Arrays und gibt dieses Element zurück. Diese Methode verändert die Länge des Arrays.
let numbers = arr.shift(0,2); // start by 0, END 2 exclusive 
console.log(arr, numbers);


let numberss = [1,2,3,4,5];

//увеличить numbers  в два раза уимножить 
for(let i = 0; i > numberss.length; i++){   // для перебора ИНДЕКСОВ
    console.log(numberss[i] *2);
}

console.log('___________________')

//прибавить к знач. элемнта 
// for(let number of numbers){ let ... OF ... Для МАССИВА 
// for(let number in numbers) для ОБЪЕКТОВ
for(let number of numbers){     // для перебора ЗНАЧЕНИИЙ
    console.log(number +5);
}

for(let number of numbers){     
    if(number%2==0){
        console.log(number +5);
    }
}

let obj = {
    name: 'Vasya',
    age:23
}

console.log(String(numbers));
console.log(String(obj));

let res = '';

//1 2 3 4 5 6 7 8 9 10
//2 4 6 8 10 12 14 16 18 20


for(let i = 1; i <=10; i++ ){
    for( let j = 1; j<=10; j++){
        res += (j*i + '\t')   // 1 2 3 4 5 6 7 8 9 10
        //arr[i][j]
    }
    console.log(res);
    res = ''
}

let matrix = [
    [1,2,3],   //0
    [4,5,6],  //1
    [7,8,9]   //2
]

console.log(matrix[1][1]);
//                     [*1]                 [*2]
let pifagorTable = [[1,2,3,4,5,6,7,8,9,10],[2,4,6,8,10,12,14,16,18,20],[],[],[],[],[],[],[],[]]

//pifagorTable[4][4]  -> 25  -> 5*5


//make the Pifagor-table for the browser
document.write('<h1 style = "text-align:center">Multiply table</h1>');
document.write('<table border="1" cellspacing = "0" cellpading = "5" align = "center">');
 for( let i = 1; i<=5; i++){
     document.write('<tr>');
        for(let j =1; j<=5; j++){
            document.write('<td width = "100px"> Hello!</td>')
        }
        document.write('</tr>')
 }
 document.write('</table>')


    

