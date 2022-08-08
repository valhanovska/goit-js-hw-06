function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const onChangeBgColorClick = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
};

btnEl.addEventListener('click', onChangeBgColorClick);
