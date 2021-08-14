const names = ['Ivan', 'Anna', 'Maria', 'Nikolay', 'Petr', 'Olga'];

const ul = document.querySelector('#list'), 
    addBtn = document.querySelector('#addBtn');

let i = 0; 

/* 
    //разные методы добавления элементов
    addBtn.onclick = () => {
        const index = getRnd(names.length);
        //ul.innerHTML += `<li>${names[index]}</li>`
       // const li = document.createElement('li');
         //добавление 
       // li.innerHTML = `${names[index]}`;

        //добавление в конец
        //ul.append(li);

        //добавление в начало
        //ul.prepend(li);

         //добавление перед
        //ul.before(li);

         //добавление после
        //ul.after(li);

        if(i===names.length) return 

        let li = createLi(names[i++]);
       // ul.append( createLi(names[index]));
        //ul.insertAdjacentElement('bevoreend', li);
        //ul.insertAdjacentHTML('bevoreend', li);
        ul.append(li);

       // ul.insertAdjacentHTML('bevorebegin', `<li>${names[index]}</li>`);

       // ul.insertAdjacentHTML('afterend', `<li>${names[index]}</li>`);

    } */

const liRender = ()=>{
    let li = createLi(names[i++]);
    ul.append(li);
    if(i===names.length) addBtn.removeEventListener('click', liRender);
}

addBtn.addEventListener('click', liRender);


    function createLi(name){
        const li = document.createElement('li');
        li.innerHTML = name;
        li.style.backgroundColor = getRandomColor();
        li.classList.add('nameList');
       /*  li.onclick = function(){
            li.style.backgroundColor = getRandomColor();
        } */
        li.onclick = changeBg;
        return li;
    }

    function getRnd(max){
        return parseInt(Math.random()*max);
    }

    //генерация рандомных цветов
    function getRandomColor(){
        return `rgb(${getRnd(256)}, ${getRnd(256)}, ${getRnd(256)})`
    }

    const box = document.querySelector('.box');

  /*   //при любом событии всегда создается объкт 
    //если хотим объектом затем пользоваться, сохраняем его, например в переменой event 
    box.onclick = (event)=>{
        console.log(event.target); // в target-поле записываются данные об объекте 
        box.style.backgroundColor = getRandomColor();
    } */

/* box.onclick = changeBg;

box.onclick = () =>{
    console.log('click');
} */

//подписываемся на событие 
box.addEventListener('click', changeBg);
box.addEventListener('click', ()=>{
    console.log('click')
})

function changeBg(event){
    event.target.style.backgroundColor = getRandomColor();
   // box.innerHTML = ('Hello!')
}

//отписываемся от события 
// box.removeEventListener('click', changeBg);