const box = document.querySelector('.box');
    item = box.querySelector('.item');
    row = document.querySelector('.row'),
    item = document.querySelectorAll('.box-item');


    const click = (event) =>{
        console.log(event.target)
        console.log('click');
    }

    item.addEventListener('click', click); //item.onlick = click
    box.addEventListener('click', click); 

// items.forEach(el => el.onclick = click);

row.onclick = (event) => {
    if(event.target.classList.contains('box-item')){
        console.log(event.target)
        console.log('click'); 
    }
}
