import getProductFormData from './get-product-form-data.js';

const form = document.getElementById('instrument-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = getProductFormData(formData);
    console.log(data);
});