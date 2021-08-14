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
    movies:{ }, // {'Titanik' : 8.8, 'Hatika : 9.4}
    genres:[], 
    private:false
}

getMovieData(3);
getGenre(3);

const movies = Object.toString(personalMovieDB.movies);
showMovieDB(personalMovieDB.private);
console.log(levelScoreMessage(personalMovieDB.count));



function start(){
    do{
        numberOfFilms = +prompt('How many films did you see last month?');
    }while(isNaN(numberOfFilms))
}

function getMovieData(filmsNumber){
    for(let i=0; i<filmsNumber; i++){
        const title = prompt ('Enter the title of last watched movie'),
                rate = parseFloat (prompt('How do rate it?'));
                console.log(rate);
            if(title != null && title != '' && rate !=null && rate != '' && !isNaN(rate)){
                personalMovieDB.movies[title] = rate;
            }else{
                alert('write correct data')
                i--
            }
    }
}

function getGenre(number){
    for(let i=1; i<=number; i++){
        personalMovieDB.genres[i-1] = prompt(`What is your top-${i} genre?`)
    }
}
    
function showMovieDB(hidden){
    if(!hidden){
       // console.log(personalMovieDB);
        alert(`You did watched: ${personalMovieDB.count} films`);
        alert(`You saved films: ${()=>{for(let key in personalMovieDB.movies){
               return '' + key +': ' + personalMovieDB.movies[key]
    }}}`);
        alert(`Your favorite genre: ${personalMovieDB.genres}`);
        alert(levelScoreMessage(personalMovieDB.count));
    }
}

function levelScoreMessage(moviesCount){
    if(moviesCount>5){
        return 'don\'t like movies?'
    }else if(moviesCount>=5 && moviesCount>=15){
        return 'you are classic viewer\u{1F60D}'
    }else if(moviesCount>15 && moviesCount>=30){
        return 'you\'re a movie buff';
    }else{
        return 'error'
    }
}