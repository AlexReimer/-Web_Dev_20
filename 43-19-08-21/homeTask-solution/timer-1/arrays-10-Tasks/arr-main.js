/* Array methods Tasks

users = [{name: 'Vasya', age: 15, height: 180}, {}, {}]

создать новый массив юзеров старше 20 лет
создать массив юзеров ниже 150
добавить в существующий массив уникальные id для каждого юзера
вернуть юзера с самым длинным именем
вернуть массив -> ['Vasya, age: 15 years old, height: 180 cm', ...]
[Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)
написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]
написать функцию changeString ('abcdef') -> 'aBcDeF'
написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве
функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7] */

const users = [
    { name: 'Vasya', age: 15, height: 180}, 
    { name: 'Petia', age: 20, height: 160 }, 
    { name: 'Vlada', age: 25, height: 149 }, 
    { name: 'Stepan', age: 30, height: 190 }, 
    { name: 'Boris', age: 45, height: 176 }, 
    { name: 'Masha', age: 32, height: 135 }];
    


//создать новый массив юзеров старше 20 лет
const usersOldest20= users.filter((user) => user.age >20);

const usersN = users.map((user)=> user.age > 20 ? {...user, ststistic:'yes'} : {...user, ststistic:'no'})
console.log(usersOldest20);
console.log(usersN);

// создать массив юзеров ниже 150
const usersSmall150 = users.filter(user => user.height < 150); 
console.log(usersSmall150);

//добавить в существующий массив уникальные id для каждого юзера

users.map((user,index) => user.id = index +1);
console.log(users);

//вернуть юзера с самым длинным именем


