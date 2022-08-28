import displayJsonOnPage from './components/displayJsonOnPage.js';
import { baseUrl, mainSectionCryptoContainer } from './constants/constant.js';

const pageProductsUrl = baseUrl + "cryptos";

//How to get parameters out of url strings.
//get the querystring on page and we need a ? mark with some text after
//This is how a querystring migh look like ?id=54&name=ben
const queryString = document.location.search;
console.log(queryString);

//To return the property of the querystring we use URLSearchParams, we can then use some of the properties to get the values in the querystring
const params = new URLSearchParams(queryString);
console.log(params);

//Use the get("id") to get the id from the querystring
console.log(params.get("id"));
console.log(params.get("name"));

//use  Immediately Invoked Function Expression to call async function at once
(async function() {

  //Use a try catch block to catch error
  try {
    const response = await fetch(pageProductsUrl );
    const json = await response.json();

    const dataFromJson = json.data;
    mainSectionCryptoContainer.replaceChildren();

    for(let i = 0; i < dataFromJson.length; i++) {
      const nameData = dataFromJson[i].attributes.title;
      const priceData = dataFromJson[i].attributes.price;
      const descriptionData = dataFromJson[i].attributes.description;

      displayJsonOnPage(mainSectionCryptoContainer, nameData, priceData, descriptionData);
    }

  } catch(error) {
  }
})();
