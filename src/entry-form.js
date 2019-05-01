import getProductFormData from './get-product-form-data.js';
import instrumentApi from './instrument-api.js';

const form = document.getElementById('instrument-form');
const slider = document.getElementById('quality');
const sliderValueText = document.getElementById('slider-value');

sliderValueText.textContent = slider.value;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = getProductFormData(formData);
    instrumentApi.set(data);
});

slider.addEventListener('change', () => {
    sliderValueText.textContent = slider.value;
});