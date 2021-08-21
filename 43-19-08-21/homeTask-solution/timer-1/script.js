const input = document.querySelector('#input'),
    startBtn = document.querySelector('#startBtn'), 
    stopBtn = document.querySelector('#stopBtn'),
    result = document.querySelector('#result');

let count, 
    id;

input.focus();

startBtn.onclick = function(){
    count = parseInt(input.value);
    if(isNaN(count)) return;
    startBtn.disabled = 'true'; //startBtn.setAttribute('disabled', true)
    stopBtn.disabled = 'true';
    input.disabled = 'true';
    result.innerText = count; 
    id = setInterval(() => {
        count--; 
        if(count>0){
            result.
        }
    }, );
}