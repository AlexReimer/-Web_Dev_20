const sendBtn = document.querySelector('[type = submit]');
const myForm = document.querySelector('#myForm')

console.log(sendBtn)
console.log(myForm)
console.log(myForm.elements) //вызов всех елементов с атрибутом name из коллекции

// вывод определенных атрибутов элемента
console.dir(myForm.elements[1]);
console.log(myForm.elements[1].id);
console.log(myForm.elements[1].attributes);

console.log(myForm.lastName)//вызов елемента с атрибутом lastName из коллекции
console.log(myForm.lastName.value);

console.log(document.forms);
console.log(document.forms.subscribe);


//Задание: по клику на srnd создавать объект и добавлять ы массив users

const users = [];
document.querySelector('#firstName').focus();


//Version 1
/* myForm.onsubmit = (event)=>{
    event.preventDefault(); //отмена поведения по умолчанию
    const firstName = event.target.firstName, 
           lastName = event.target.lastName,
           email = event.target.email,

    const user = {
        firstName: firstName.value, 
        lastName: lastName.value, 
        email: email.value,
    }
    users.push(user);
    firstName.value: '';
    lastName.value: ''; 
    email.value: 'email.value';
    firstName.focus();
    console.log(users);
} */

//VERSION 2
/* myForm.onsubmit = (event)=>{
    event.preventDefault(); //отмена поведения по умолчанию
    
    const firstName = event.target.firstName, 
           lastName = event.target.lastName,
           email = event.target.email;

    users.push(createUser(firstName, lastName, email));
    firstName.value = '';
    lastName.value = ''; 
    email.value = 'email.value';
    clean(firstName);
    clean(lastName);
    clean(email);
    firstName.focus();
    console.log(users);
}

function createUser(firstName, lastName, eMail){
    return {
        firstName,
        lastName, 
        email,
    }
}

function clean (elements){
    element.value = '';
} */

//Version 3
myForm.onsubmit = (event)=>{
    event.preventDefault(); //отмена поведения по умолчанию
    const firstName = event.target.firstName, 
           lastName = event.target.lastName,
           email = event.target.email;

    users.push(createUser(firstName, lastName, email));
    console.log(myForm.elements);
    //:not фильтрует - все кроме submit
    const inputs = myForm.querySelectorAll('input:not([type:submit]');
    console.log(inputs);
    clean(inputs);
    firstName.focus();
    console.log(users);
}

function createUser(firstName, lastName, eMail){
    return {
        firstName,
        lastName, 
        email,
    }
}

function clean (elements){
    for (element of elements)
    element.value = '';
}