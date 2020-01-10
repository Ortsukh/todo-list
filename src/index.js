import './css/style.css';

import {redactTodo, hidden} from './js/redact';
import {listenDeleteTodo} from './js/remove';
import {save, clear, loadTodo} from './js/save,load,clear';
import {addNew} from './js/add';
const spans = document.getElementsByClassName('todo-trash');

const input = document.querySelector("input[type='text']");
const ul = document.querySelector('ul.todos');
const red = document.getElementsByClassName('redact');
// console.log(red);

input.addEventListener('keypress', (keyPressed) => {
  const keyEnter = 13;
  if (keyPressed.which === keyEnter) {
    addNew();
  }
});

loadTodo();
hidden(ul.children);
listenDeleteTodo(spans);
redactTodo(red);
save();
clear();
