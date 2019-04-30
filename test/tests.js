import getProductFormData from '../src/get-product-form-data.js';
const test = QUnit.test;

test('get form data', (assert) => {
    //Arrange
    const expected = {
        name: 'clarinet',
        price: '2000',
        description: 'Professional clarinet made in France',
        family: 'woodwind',
        accessories: ['reeds', 'neckstrap'],
        condition: 'new',
        quality: '10'
    };
    const formData = new FormData;
    formData.set('name', expected.name);
    formData.set('price', expected.price);
    formData.set('description', expected.description);
    formData.set('instrument-family', expected.family);
    formData.set('accessory', expected.accessories[0]);
    formData.append('accessory', expected.accessories[1]);
    formData.set('condition', expected.condition);
    formData.set('quality', '10');

    //Act
    const actual = getProductFormData(formData);

    //Assess
    assert.deepEqual(actual, expected);
});

const instrumentApi = {
    set(instrumentData) {
        const json = JSON.stringify(instrumentData);
        localStorage.setItem('instrument', json);
    },
    get() {
        const json = localStorage.getItem('instrument');
        const instrument = JSON.parse(json);
        return instrument;
    }
};

test('round trip of instrument data', assert => {
    // Arrange
    const expected = {
        testing: 'test'
    };
    // Act
    instrumentApi.set(expected);
    const actual = instrumentApi.get();
    // Assert
    assert.deepEqual(actual, expected);
});