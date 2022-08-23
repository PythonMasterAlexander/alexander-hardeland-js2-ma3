import displayLogInErrorMessage from './components/displayLogInErrorMessage.js';

const formElement = document.querySelector('#login-page-form-container');
const errorMessageContainer = document.querySelector('.input-section__display-message-container');


const validateLogInPageForm = function() {
  event.preventDefault();

  //clear input values for spaces
  const userName = formElement.username.value.trim();
  const password = formElement.password.value.trim();

  console.log("hello");
  if(userName.length === 0 || password.length === 0) {
    displayLogInErrorMessage(errorMessageContainer, 'It works', 'message-fail');
  }
};

formElement.addEventListener('submit', validateLogInPageForm);
