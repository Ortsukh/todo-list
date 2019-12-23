import ItemComponent from '../item/item';

function createList (items) {
  const list = document.createElement('ul');
  const elements = items.map(item => ItemComponent.createItem(item));
  elements.forEach(element => {
    list.append(element);
  });
  return list;
}
export default {
  createList
};

localStorage.items = JSON.stringify([{
  text: 'first'
},
{
  text: 'first'
}

]);
