// function getData () {
//   const data = window.localStorage.data;
//   if (typeof data !== 'undefined') {
//     return JSON.parse(data);
//   }
// }
// function setData (obj) {
//   window.localStorage.data = JSON.stringify(obj);
// }

// export default {getData, setData};
function getItems () {
  return JSON.parse(localStorage.items);
}
function setItems (items) {
  localStorage.items = JSON.stringify(items);
}
function addItems (item) {
  const items = getItems();
  items.push(item);
  setItems(items);
}

function deleteItem (deleteItem) {
  const items = getItems();
  const deleteIndex = items.findIndex(item => item.id === deleteItem.id);
  items.splice(deleteIndex, 1);
  setItems(items);
}
export default {
  getItems,
  setItems,
  addItems,
  deleteItem
};
