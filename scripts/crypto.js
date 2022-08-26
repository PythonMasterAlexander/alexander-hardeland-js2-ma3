import displayJsonOnPage from './components/displayJsonOnPage.js';
import { baseUrl, mainSectionCryptoContainer } from './constants/constant.js';

const pageProductsUrl = baseUrl + "cryptos";

//use  Immediately Invoked Function Expression to call async function at once
(async function() {

  //Use a try catch block to catch error
  try {
    const response = await fetch(pageProductsUrl );
    const json = await response.json();

    const dataFromJson = json.data;
    for(let i = 0; i < dataFromJson.length; i++) {
      const nameData = dataFromJson[i].attributes.title;
      const priceData = dataFromJson[i].attributes.price;
      const descriptionData = dataFromJson[i].attributes.description;

      displayJsonOnPage(mainSectionCryptoContainer, nameData, priceData, descriptionData);
    }

  } catch(error) {
  }
})();
