/* let maName = 'Vasya';

function sayHello(){
    myName 
} */



let myName; 
function getMessage(){
    myName = 'Petya';
    return function(){       // !return myName;
        console.log(myName)
    }
}

myName = 'Vasya'; 

let message = getMessage();  // function(){console.log(myName)}
message();


//как используется ЗАМЫКАНИЕ

function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

const counter = makeCounter(); 
console.log(counter()); // -> 0
console.log(counter()); // -> 1
console.log(counter()); // -> 2
console.log(counter()); // -> 3
console.log('======================='); 

//counter = makeCounter();         // SAME const counter1 = makeCounter(); 
console.log(counter()); // -> 0


function makeUserId(){
    let userIdFunction = [];    //function(){console.log(i)}
    let i = 0;
    while(i<5){
        let userId = function(){
            console.log(i);
        }
        userIdFunction.push(userId);
        i++;
    }
    return userIdFunction;
}

const userId = makeUserId();

userId[0](); // -> 5
userId[3](); // -> 5


function makeUserId(){
    let userIdFunction = [];    //function(){console.log(i)}
    //let i = 0;
    for (let i=0; i<5; i++){
        let userId = function(){
            console.log(i);
        }
        userIdFunction.push(userId);
    }
    return userIdFunction;
}

const userId = makeUserId();

userId[0](); // -> 
userId[3](); // -> 

console.log(userId);


//Prototype

let str = `some string`;
const strObject = new String('another string');

console.log(typeof str);  //string 
console.log(typeof strObject); //object

console.log('abcd'.toUpperCase());

console.dir([1,2,3])

const cat = {
    feet: 4,
    tail:1, 
    ears:2, 
    voice: function(){
        console.log('meow-meow')
    }
}

const barsik = {
    color:'black',
    age:2
}

// barsik.__proto__ = cat;  //старый синтакчис 

Object.setPrototypeOf(barsik, cat);    //статический способ 
const murzik = Object.create(cat);     // динамический способ 

// murzik.color = 'white'
// murzik.age = 3
// ИЛИ так: 
// const murzik = Object.create(cat, {color:{value: 'white'}, age:{value:3}});


console.log(barsik); 
//console.dir(barsik);

barsik.voice();     // -> 'meow-meow'
console.log(barsik.tail); //-> 1



//function Constructor
function User (name, id){
    this.name = name; 
    this.id = id; 
    this.human = true; 
    this.say = function(message){
        console.log(`${name} say: ${message}`);
    }
}

const user1 = new User('Vasja', 1); 
user1.say('Hello!');                 //Vasja say: Hello!

const user2 = new User('Anna', 2); 
user2.say('Nice to meet you!');       //Anna say: Nice to meet you!

console.log(user1,user2)      // User { name: 'Vasja', id: 1, human: true, say: [Function (anonymous)] } User { name: 'Anna', id: 2, human: true, say: [Function (anonymous)] }

//add ПОЛЯ к объекту
user1.age = 32;

//add ПОЛЯ to constructor
User.prototype.goodBye = function(){
    console.log(`User ${this.name}  say good bye!`)
}

user1
user2