const inputEl = document.querySelector('#validation-input');
const data = inputEl.getAttribute('data-length');

inputEl.onblur = () => {
  if (inputEl.value.length === +data) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (inputEl.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};
