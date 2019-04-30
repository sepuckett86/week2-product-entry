import getProductFormData from './get-product-form-data.js';
import instrumentApi from './instrument-api.js';

const form = document.getElementById('instrument-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = getProductFormData(formData);
    instrumentApi.set(data);
});