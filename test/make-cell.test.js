import makeCell from '../src/make-cell.js';

const test = QUnit.test;

QUnit.module('make-cell');

test('makeNameCell returns a td with link', assert => {
    // Arrange
    const name = 'clarinet';
    const expected = '<td><a href="./product-detail.html?name=clarinet">clarinet</a></td>'
    // Act
    const nameCell = makeCell.makeNameCell(name);
    const actual = nameCell.outerHTML;
    // Assert
    assert.equal(actual, expected);
});

test('makeTextCell returns a td with text', assert => {
    // Arrange
    const text = 'Percussion';
    const expected = '<td>Percussion</td>';
    // Act
    const textCell = makeCell.makeTextCell(text);
    const actual = textCell.outerHTML;
    // Assert
    assert.equal(actual, expected);
});