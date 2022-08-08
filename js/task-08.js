const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector("[type = 'email']");
const inputPasswordEl = document.querySelector("[type = 'password']");

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmailEl.value.trim() === '' || inputPasswordEl.value.trim() === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    console.log({
      email: inputEmailEl.value,
      password: inputPasswordEl.value,
    });
    event.target.reset();
  }
}

formEl.addEventListener('submit', onFormSubmit);
