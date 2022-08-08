const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const elemEl = [];

ingredients.forEach(element => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;
  console.log(itemEl);
  elemEl.push(itemEl);
});
ingredientsEl.append(...elemEl);
