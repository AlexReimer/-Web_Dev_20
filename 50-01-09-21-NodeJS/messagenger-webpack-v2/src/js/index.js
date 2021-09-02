

const usersList = document.querySelector('.users-list')
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right');

export function findUserById(id){
    return users.find(user => user.id === id)   //{name: Vasya, city: Berlin, id:0}
}



const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    if(event.target.tagName === 'H3'){
        const userMessages = messages.filter(message => message.userId ===  +event.target.dataset.id)
        console.log(userMessages)
        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
        leftBox.innerHTML = `${messageList}<br><h4>Write new message</h4>` 
    }
}

leftBox.onclick = (event) => {
    let target = event.target;
    if(target.tagName !== 'DIV'){
        target = event.target.parentNode
    }
    const message = messages.find(m => m.id === +target.dataset.message);
    rightBox.innerHTML = (message) ? message.renderFullInfo() : ''

}



