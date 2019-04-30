const test = QUnit.test;

function getProductFormData(formData) {
    const instrument = {
        name: formData.get('name'),
        price: parseInt(formData.get('price')),
        description: formData.get('description'),
        family: formData.get('family'),
        accessories: formData.getAll('accessory'),
        condition: formData.get('condition')
    };
    return instrument;
};

test('get form data', (assert) => {
    //Arrange
    const expected = {
        name: 'clarinet',
        price: 2000,
        description: 'Professional clarinet made in France',
        family: 'woodwind',
        accessories: ['reeds', 'neckstrap'],
        condition: 'new'
    };
    const formData = new FormData;
    formData.set('name', expected.name);
    formData.set('price', expected.price);
    formData.set('description', expected.description);
    formData.set('family', expected.family);
    formData.set('accessory', expected.accessories[0]);
    formData.append('accessory', expected.accessories[1]);
    formData.set('condition', expected.condition);

    //Act
    const actual = getProductFormData(formData);

    //Assess
    assert.deepEqual(actual, expected);
});