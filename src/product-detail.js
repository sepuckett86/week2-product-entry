import instrumentApi from './instrument-api.js';

const name = document.getElementById('name');
const price = document.getElementById('price');
const description = document.getElementById('description');
const family = document.getElementById('instrument-family');
const accessory = document.getElementById('accessory');
const condition = document.getElementById('condition');
const quality = document.getElementById('quality');

// get instrument name from URL
const searchParams = new URLSearchParams(window.location.search);
const instrumentName = searchParams.get('name');
const instrumentData = instrumentApi.get(instrumentName);

if(!instrumentData) {
    //window.location = './';
}

name.textContent = instrumentData.name;
price.textContent = instrumentData.price;
description.textContent = instrumentData.description;
family.textContent = instrumentData.family;
accessory.textContent = instrumentData.accessories.join(', ');
condition.textContent = instrumentData.condition;
quality.textContent = instrumentData.quality;