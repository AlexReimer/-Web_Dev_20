/* Task01
    игра русско-английский словарь;
    // Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
    // и если пользователь ввел правильный перевод - удалять слово из массива
    // Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
    // Если ошибки были - показывать число сделанных ошибок, спросить не хотите повторить?
    // Спросить пользователя, хочет ли он перейти на следующий уровень?
    //Реализовать следующий уровень

    //Со звездочкой - реализовать возможность выбора языка
 */


const easyWords = [             //words[1][0] -> eng index=0 -> ru index=1
    ['food','еда','Essen'],
    ['bike','велосипед','Fahrrad'],
    ['apple','яблоко','Apfel'],
    ['do','делать','machen'],
    ['mean','иметь в виду','meinen' ],
],

complexWord = [
    ['function', 'функция'],
    ['array', 'массив'],
    ['stream', 'поток'],
    ['resolve', 'решить'],
    ['calculate', 'посчитать'],
],

ru = 1;
eng = 0;
de = 2;

levels = [easyWords, complexWord];

startGame(levels);

function startGame(gameLevels){
    for(let i = 0; i < gameLevels.length; i++){
        const words = gameLevels[i].map(item => item); // gameLevels[i].slice();
        const errorCount = checkUserTranslation(gameLevels[i]);
        const repeat = finalMessage(errorCount);  // null, true, false
        if(!repeat){
            let nextLevel;
            if(i!=gameLevels-1){
                nextLevel = confirm ('Next level?');
            } 
            if(!nextLevel){
                alert('See you next time');
                break;
            }
        }else{
            i--
        }
    }
}



function checkUserTranslation(words){
    let errorCount = 0; 
    while(words.length){                 //когда words.length = 0, остановится тк 0 это false
        const index = getRandomArrayIndex(words.length);
        const userTranslation = getUserTranslation(words, index);
        if(userTranslation == null){
            return null;
        }
        else if(userTranslation === words[index][ru]){
            alert('Correct')
            words.splice(index, 1)
        } else {
            alert(`wrong, correct answer is ${words[index][ru]}`);
            errorCount++;
        }
    }
    return errorCount;
}

function getUserTranslation(words, index){
return prompt(`how do you translate the word ${words[index][eng]}?`).toLowerCase(); //toLowerCase
}

//Генерация случ. индекса в диапазоне от 0 до длины 
function getRandomArrayIndex(range){
    return Math.floor(Math.random() * range)
}

function finalMessage(count){
    if(count == 0) alert('Great job');
    else {
        if(count)
        alert(`you were wrong ${count} times`);}
    return count == null ? null: confirm('One more time?');
}