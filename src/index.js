import './style.css';
import ItemsListComponent from './items-list/items-list.js';
import ItemsService from './model';
ItemsService.addItems({ text: 'aasdas' });
const list = ItemsListComponent.createList(ItemsService.getItems());

document.getElementById('app').append(list);

// const style = require('./style.css');
