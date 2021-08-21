/* 
Сохранять вводимые строчки в массив todoList, как объекты: {todo: 'some text', done: false}. в поле todo сохраняется строчка из инпута, в поле done состояние checkbox (false - checkbox не отмечен, true - отмечен). Если состояние checkbox меняется, значение, хранящееся в поле done у объекта тоже меняется
 */

const inputText = document.querySelector('#myInput'),
addBtn = document.querySelector('#addBtn'),
//list = document.querySelector('#todo-list');

const todoArray = []; // {id, todo:"", done:false };

/* 
1. Забираем текст из инпута
2. Создаем объект{id: 0, //++todo: input.value,done: false}
3. Сохранем объект в массиве
4. преобразовываем объекты в элементы спискаa. {id, todo:"", done:false} -> '<li class = "list-group-item d-flex align-items-center">
            <input type="checkbox" class = "col-1"><h2 class="col-9">Item</h2><button class="col-2 btn btn-danger">Remove</button></li>'
    b.привязываем прослушивание событий
5. наполняем элементами список 
*/

addBtn.onclick = () => {
    const input = inputText.nodeValue.trim();
    if(input){
        todoArray.push(createTodoItem(input));
        const elArray = todoArray.map(mapTaskToListElement);
        renderParent('#todo-list', elArray);
        inputText.value = '';
        inputText.focus();

    }
}

function renderParent(selector, array){
    const element = document.querySelector(selector);
    if(element){
        element.innerHTML = '';
        array.array.forEach(item => {
            element.append (item)
        });
    }
}

//элементы массива становятся частью верстки
function mapTaskToListElement (task, index){
    const li = document.createElement ('li'), 
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button = document.createElement('button');

    li.className = "list-group-item d-flex align-items-center";
    checkbox.type = 'checkbox'; 
    checkbox.className = "col-1";
    checkbox.checked = task.done; 
    title.className = "col-9";
    title.innerText = task.todo;
    title.style.textDecoration = task.done ? 'line-through' : 'none';
    button.innerText = 'Remove';
    button.className = 'col-2 btn btn-danger';

    button.onclick = ()=>{
        todoArray.splice(index, 1);
        renderParent();
    }
    checkbox.onchange = () => {
        todoArray[index].done = checkbox.checked;
        title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }
    li.append(checkbox);
    li.append(title);
    li.append(button);
    return li;

}

//function renderUl

function createTodoItem(task){
    return {
        id:todoArray.length,
        todo:task,
        done: false
    }
}