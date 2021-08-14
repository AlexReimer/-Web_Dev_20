/* Task#1
Реализовать todoList. у вас должен быть инпут и кнопка, в инпут вводится строка, при нажатии на кнопку создается элемент списка с checkbox и текстом из инпута, элемент отрисовывается под инпутом, если checkbox отмечен, то текст перечеркивается, если checkbox не отмечен текст имеет обычный вид
 */

const inputText = document.querySelector('#myInput'),
        addBtn = document.querySelector('#addBtn'),
        list = document.querySelector('#todo-list');

inputText.focus();

addBtn.onclick = ()=>{
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    //checkbox.type = 'checkbox';
    checkbox.setAttribute('type', 'checkbox');

    li.innerHTML = inputText.value;
    li.prepend(checkbox);

    checkbox.onchange = () =>{
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }

    list.append(li);
    inputText.value ='';
    inputText.focus;

}