const formElement = document.querySelector("#login-page-form-container");

const validateLogInPageForm = function() {
  event.preventDefault();

  const userName = formElement.username.value;
  const password = formElement.password.value;

  console.log('Username :', userName);
  console.log('Password :', password);
};

formElement.addEventListener('submit', validateLogInPageForm);
