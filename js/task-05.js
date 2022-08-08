const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  outputEl.textContent = inputEl.value;
  if (inputEl.value === '') {
    outputEl.textContent = 'Anonymous';
  }
});
