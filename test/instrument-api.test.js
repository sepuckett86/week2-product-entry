import instrumentApi from '../src/instrument-api.js';

const test = QUnit.test;

QUnit.module('instrument-api');

test('round trip of instrument data', assert => {
    localStorage.removeItem('instrument');
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

test('return an empty array if there are no instruments in local storage', (assert) => {
    localStorage.removeItem('instrument');
    // Arrange
    const expected = [];
    // Act
    const actual = instrumentApi.getAll();
    // Assert
    assert.deepEqual(actual, expected);
});