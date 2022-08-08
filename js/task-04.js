let counterValue = 0;

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

const onBtnIncrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onBtnDecrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnIncrement.addEventListener('click', onBtnIncrementClick);
btnDecrement.addEventListener('click', onBtnDecrementClick);
