import displayLogInErrorMessage from './components/displayLogInErrorMessage.js';

const formElement = document.querySelector('#login-page-form-container');
const errorMessageContainer = document.querySelector('.input-section__display-message-container');

const userNameAndPasswordLength = 2;

const validateLogInPageForm = function() {
  event.preventDefault();

  //clear input values for spaces
  const userName = formElement.username.value.trim();
  const password = formElement.password.value.trim();

  errorMessageContainer.replaceChildren();

  if (userName.length <= userNameAndPasswordLength || password.length <= userNameAndPasswordLength) {
    return displayLogInErrorMessage(errorMessageContainer, 'Invalid username or password', 'message-fail');
  }
};

formElement.addEventListener('submit', validateLogInPageForm);
