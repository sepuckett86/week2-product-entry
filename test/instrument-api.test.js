import instrumentApi from '../src/instrument-api.js';

const test = QUnit.test;

QUnit.module('instrument-api');

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