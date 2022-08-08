const categoriesEl = document.querySelectorAll('.item');
console.log(`Numbers of categories:`, categoriesEl.length);
categoriesEl.forEach(item => {
  let textEl = item.firstElementChild.textContent;
  let countEl = item.lastElementChild.children;
  console.log('Category:', textEl);
  console.log('Elements:', countEl.length);
});
