//task01
// сделать в домашке все методы кроме start() personalMovieDB  методами объекта

/* 1.Реализовать заполнение объекта movies, в зависимости от количества просмотренных фильмов (структура хранения данных: название фильма-ключб рейтинг- значение )
    2.Спросить три любимых жанра и сохранить ответы в массив genres
    3.Реализовать метод, который дает или не дает распечатать полученные ланные (проверка поля private)
    4.Оценпть количество просмотренных фильмов и вывести ссответствующие сообщшение ( 
        от 0 до 1
        от 1 до 3 
        от 3 до 5
        > 5 )
 */

let numberOfFilms;
start();

const personalMovieDB = {
    count:numberOfFilms, 
    movies:{
        toString:function(){   //  Object object поэтому переопределяем  toString 
            let movieList = '';
            for(let key in this){
                if(typeof this[key] != 'function')
                movieList += `'${key}': ${this[key]}\n`            
            }
            return movieList;
        }
     }, // {'Titanik' : 8.8, 'Hatika : 9.4}
    genres:[], 
    private:false,
    getMovieData: function(filmsNumber){
        for(let i=0; i<filmsNumber; i++){
            const title = prompt ('Enter the title of last watched movie'),
                    rate = parseFloat (prompt('How do rate it?'));
                    console.log(rate);
                if(title != null && title != '' && rate !=null && rate != '' && !isNaN(rate)){
                    this.movies[title] = rate;
                }else{
                    alert('write correct data')
                    i--
            }
        }
    }, 
    getGenre: function(number){
        for(let i=1; i<=number; i++){
            this.genres[i-1] = prompt(`What is your top-${i} genre?`)
        }
    },
    showMovieDB: function(){
        if(!this.private){
           // console.log(personalMovieDB);
            alert(`You did watched: ${this.count} films`);
            alert('You saved films: \n' + this.movies);
            alert(`Your favorite genre: ${this.genres}`);
            alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage: function (){
        if(this.count>5){
            return 'don\'t like movies?'
        }else if(this.count>=5 && this.count>=15){
            return 'you are classic viewer\u{1F60D}'
        }else if(this.count>15 && this.count>=30){
            return 'you\'re a movie buff';
        }else{
            return 'error'
        }
    }
}

personalMovieDB.getMovieData(2); //(..) кол-во запрашиваемых фильмов
personalMovieDB.getGenre(2);    //(..) кол-во запрашиваемых жанров
personalMovieDB.showMovieDB();


function start(){
    do{
        numberOfFilms = +prompt('How many films did you see last month?');
    }while(isNaN(numberOfFilms))
}



//Task02
/* написать функцию, укорачивающуу строку 
    function stringCat(str, maxLength);
    z.B
    stringCat('hello world', 5) _> "hello..." если больше 5 симв. то обрезать и добавить '...'
    stringCat('hello', 5) _> "hello" //если короче . вернуть изначальную строку
 */

    // Variant 1
    function stringCat(str, maxLength){
        if(str.length > maxLength){
            return str.slice(0,maxLength) + '...';
        } //else не нужно, тк если условие выше не сработает, то второй return будет и так
        return str;
    }
    
     // Variant 2 - короче код через ТЕРНАРНЫЙ оператор
    function сatString(str, maxLength){
        return (str.length > maxLength) ?  str.slice(0,maxLength) + '...':str;
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

const words = [                    //words[1][0] -> eng index=0 -> ru index=1
    ['food','еда','Essen'],
    ['bike','велосипед','Fahrrad'],
    ['apple','яблоко','Apfel'],
    ['do','делать','machen'],
    ['mean','иметь в виду','meinen' ]
];

//чтобы код универсальным стал 
//добавляем язык
const ru = 1;
const eng = 0;
const de = 2;

checkUserTranslation();

function checkUserTranslation(){
    for(let i=0; i<words.length; i++){
        const userTranslation = getUserTranslation(i);
        if(userTranslation === words[i][de]) alert('Correct')
        else alert(`wrong, correct answer is ${words[i][de]}`);
    }
}

function getUserTranslation(index){
    return prompt(`how do you translate the word ${words[index][eng]}?`).toLowerCase(); //toLowerCase
    
}