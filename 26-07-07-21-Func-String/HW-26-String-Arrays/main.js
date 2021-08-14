//task01
// сделать в домашке все методы кроме start() personalMovieDB  методами объекта

//Task02
/* написать функцию, укорачивающуу строку 
    function stringCat(str, maxLength);
    z.B
    stringCat('hello world', 5) _> "hello..." если больше 5 симв. то обрезать и добавить '...'
    stringCat('hello', 5) _> "hello" //если короче . вернуть изначальную строку
 */


const str = 'Hallo Berlin!'; //-> Hallo...
const str2 = 'Paris';        //-> Paris
const str3 = 'London';       //-> Londo...
const str4 = 'Prag';         //-> Prag
stringCut(str);
stringCut(str2);
stringCut(str3);
stringCut(str4);

function stringCut(strng){
    if(strng.length > 5){
        console.log(strng.slice(0,5) + '...');
    }else{
        console.log(strng);
    }
}



//Task03
/* 
игра русско-английский словарь;
двухмерный массив с парами слов (5 пар слов)
справшиваем польз. перевод англ. слова из массива, если правильно, вывод "отлично"
если нет - правильный английский перевод
(цикл - показ англ. слова, седи перевол правильный, то ..., нет - показ перевод)
англ. слова напр. по четному 
 */

const dictArr = [
    ['привет','hello'],
    ['друг','friend'],
    ['поиграем','play'],
    ['футбол','football'],
    ['да','yes'],
    ['отлично','great']
];

//console.log(dictArr [3][1]);
englRussDictionary(dictArr);

function englRussDictionary(arr){
    const firstWord = prompt ('Как перевести на русский язык слово: ' + (arr[0][1]) + ' ?');
    if(firstWord.includes(arr[0][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[0][0]) + '.');
    }

    const secondWord = prompt ('Как перевести на русский язык слово: ' + (arr[1][1]) + ' ?');
    if(secondWord.includes(arr[1][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[1][0]) + '.');
    }

    const thirdWord = prompt ('Как перевести на русский язык слово: ' + (arr[2][1]) + ' ?');
    if(thirdWord.includes(arr[2][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[2][0]) + '.');
    }

    const fourthWord = prompt ('Как перевести на русский язык слово: ' + (arr[3][1]) + ' ?');
    if(fourthWord.includes(arr[3][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[3][0]) + '.');
    }

    const fifthWord = prompt ('Как перевести на русский язык слово: ' + (arr[4][1]) + ' ?');
    if(fifthWord.includes(arr[4][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[4][0]) + '.');
    }

    const sixthWord = prompt ('Как перевести на русский язык слово: ' + (arr[5][1]) + ' ?');
    if(sixthWord.includes(arr[5][0])){
        alert('Отлично!')
    }else{
        alert('Правильный ответ: ' + (arr[5][0]) + '.');
    }
}

  /*   for(let i = 0; i < arr.length; i++){
        const firstWord = prompt ('Как перевести на русский язык слово: ' + (arr[0][1]) + ' ?');
    } */


/*     for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[x].length; j+1) {
            console.log(arr[j]);
            //document.write(arr[i][j] + " ");
        } */

    /* for(let uppArr of arr){
        for(let eword of uppArr){
            console.log(eword);
        }
    } */

   // alert('Как переводится на русский английское слово ')



/* function picksWords(arr){
    for(eword of dictArr){
        let englWordsArr = eword.map()
        alert
    }
} */