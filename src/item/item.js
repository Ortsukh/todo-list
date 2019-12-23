function createItem (item) {
  const element = document.createElement('li');
  element.innerText = item.text;
  return element;
}
export default {
  createItem
};
