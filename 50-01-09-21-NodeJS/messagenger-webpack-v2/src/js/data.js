import User from './user.js';
import Comment from './comment.js';
import Message from './message.js';



const users = [
    new User('Vasya Pupkin', 'Berlin'),   // -> id 
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString())
]

messages[0].comments.push(new Comment(0,0, 'very good',new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(1,0, 'nice to see you', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(2,1, 'hello!', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0,1, 'good bye!', new Date().toLocaleDateString()));