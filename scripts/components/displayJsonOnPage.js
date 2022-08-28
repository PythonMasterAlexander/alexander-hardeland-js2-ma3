let hrefAttributeValue = "crypto.html?id=${product.id}";

const createLinkElement = function(attributeValue) {
  const linkElement = document.createElement('a');
  linkElement.setAttribute("href", attributeValue)

  return linkElement;
};

const displayJsonOnPage = function(parentElement, nameContent, priceContent, descriptionContent) {
  const nameContentElement = document.createElement('h2');
  nameContentElement.innerText = nameContent; 

  const priceContentElement = document.createElement('span');
  priceContentElement.innerText = priceContent;

  const descriptionContentElement = document.createElement('span');
  descriptionContentElement.innerText = descriptionContent;

  const divElement = document.createElement('div');
  divElement.append(nameContentElement, priceContentElement, descriptionContentElement)

  return parentElement.append(divElement);
};
export default displayJsonOnPage; 
