const modalTriggers = document.querySelectorAll('[data-modal]');

//console.log(modalTriggers);

/* for ( let btn of modalTriggers){
    btn.onclick = (event) =>{
        if(event.target.dataset.modal == 2){
            console.log('click')
        }
    }
} */

modalTriggers.forEach((btn)=>{
    btn.addEventListener('click', clickHandler)
});

/* const clickHandler = ()=>{
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-dialog">
        <form action="#">
            <div class="modal-close" data-close>&times</div>
            <h3>We will get in touch with you as soon as possible</h3>
            <input type="text" class="modal-input" placeholder="your name">
            <input type="text" class="modal-input" placeholder="your phone number">
            <button class='btn btn-dark'>Call me back</button>
        </form>
    </div>
    `

      const close = modal.querySelector('[data-close]');
    close.addEventListener('click', closeModal);
    document.querySelector('body').append(modal);
    document.body.style.overflow = 'hidden';
} */

function clickHandler (){
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-dialog">
        <form action="#">
            <div class="modal-close" data-close>&times</div>
            <h3>We will get in touch with you as soon as possible</h3>
            <input type="text" class="modal-input" placeholder="your name">
            <input type="text" class="modal-input" placeholder="your phone number">
            <button class='btn btn-dark'>Call me back</button>
        </form>
    </div>
    `
    //const close = modal.querySelector('[data-close]');
    //close.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModalWindow);
    document.querySelector('body').append(modal);
    document.body.style.overflow = 'hidden';
}

function closeModal(){
    document.querySelector('.modal[data-close').removeEventListener('click', closeModal);
    document.querySelector('.modal').remove();
    document.body.style.overflow = '';
}

function closeModalWindow(event){
    const target = event.target;
    if(target === document.querySelector('.modal') || target === document.querySelector('.modal [data-close]')){
        closeModal();
    }
}