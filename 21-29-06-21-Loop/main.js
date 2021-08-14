let a,b; 

if(a)
if(b)
console.log('a anb b both true');
else
console.log('???');

//=====================
const login = prompt('enter login, please');
let message; 

if(login === 'admin'){
    const password = prompt('enter passwort'); 
    if(password === 'boss'){
        message = 'hello boss!';
    }else if(password === null || password === ''){
        message = 'cancelled';
    }else{
        message = 'wrong password'
    }
}else if(login === null || login === ''){
    message = 'cancelled';
}else{
    message = "i don't know you"; // двойные ковычки из-за апострофа
}
alert(message);