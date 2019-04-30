const test = QUnit.test;

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

    //Act
    const actual = getProductFormData(formData);

    //Assess
    AbstractRange.equal(actual, expected);
});