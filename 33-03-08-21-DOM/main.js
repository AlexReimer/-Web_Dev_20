const box = document.getElementById('box'), 
      btns = document.getElementsByTagName('button'), //return collection
      circles = document.getElementsByClassName('circle'), //return collection
      squares = document.querySelectorAll('.wrapper .square'), //return NodeList
      greens = document.getElementsByClassName('square'),
      wrapper = document.querySelector('.two') //return element
      ;

console.log(box);
console.dir(box);

console.log(btns[0]);
console.log(circles);
console.log(squares);
console.log(greens);

console.log(wrapper);
wrapper.innerHTML += `<div class="square"></div>`
console.log(wrapper);
console.log(circles);
console.log(squares);
console.log(greens);

const elements = Array.from(greens);
console.log(elements);

//как влиять на элементы 
box.style.backgroundColor = 'blue';
box.style.width = '400px';

//btns[3].style.borderRadius = '50%';

for(btn of btns){
    btn.style.borderRadius = '50%'
}

//squares.forEach(el=>el.style.cssText)

for(s of greens){
    s.style.backgroundColor = 'red'
}


box.style.cssText = 'background-color: orange; width: 100px;'

//const color = 'violet';
const color = promt('type your color') //как пользователь может влиять цвет

circles[0].style = `backgroung-color: ${color}`

title.className = 'title active';

title.classList.add('active', 'title'); //классы через запятую сколько надо
title.classList.remove('title');
title.classList.toggle('active'); //переключатель: если у эл.был такой класс, то уберет, есди не было, то добавит
title.classList.toggle('active');

//create and add element
const div = document.createElement()

div.classList.add('black');
document.body.append(div); //добавляем в конец в body 
wrapper.append(div);       //добавляем в конец в класс wrapper
wrapper.prepend(div);  //добавляем в начало в класс wrapper

greens[1].before(div)    //добавить перед ОПРЕДЕЛЕННЫМ элементом
greens[1].after(div)    //добавить  после ОПРЕДЕЛЕННОГО элемента

div.innerHTML = '<h2>Hello world!</h2>'
div.textContent = '<h2>Hello world!</h2>'

console.log(document.querySelector('.wrapper').lastElementChild); 

document.querySelector('.wrapper').lastElementChild.before(div);

for (let b of btns){
    b.classList.add('green')
}


/* 
                                parentNode
                                    |
    previousSiblingElement <--  <element> --> nextSiblingElement
                                    |
        firstElementChild  <--  children  --> lastElementChild
*/ 