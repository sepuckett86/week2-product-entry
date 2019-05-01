import instrumentApi from '../src/instrument-api.js';

const test = QUnit.test;

QUnit.module('instrument-api');

instrumentApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip of instrument data', assert => {
    testStorage.removeItem('instruments');
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
    testStorage.removeItem('instruments');
    // Arrange
    const expected = [];
    // Act
    const actual = instrumentApi.getAll();
    // Assert
    assert.deepEqual(actual, expected);
});

test('return whole array of instrument data with two members', assert => {
    testStorage.removeItem('instruments');
    // Arrange
    const instrument1 = { name: 'clarinet' };
    const instrument2 = { name: 'trombone' };
    const expected = [instrument1, instrument2];
    // Act
    instrumentApi.set(instrument1);
    instrumentApi.set(instrument2);
    const actual = instrumentApi.getAll();
    // Assert
    assert.deepEqual(actual, expected);
});