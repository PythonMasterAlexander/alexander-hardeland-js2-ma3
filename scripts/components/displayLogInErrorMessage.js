const createSpanElement = function(message, messageStyleClass) {
  const spanElement = document.createElement('span');

  spanElement.classList.add(messageStyleClass);
  spanElement.innerText = message;

  return spanElement;
};

const displayLogInErrorMessage = function(parentElement, message, messageStyleClass) {
  parentElement.replaceChildren();

  const spanElement = createSpanElement(message, messageStyleClass);
  parentElement.classList.add(messageStyleClass);

  parentElement.append(spanElement);
};
export default displayLogInErrorMessage; 
