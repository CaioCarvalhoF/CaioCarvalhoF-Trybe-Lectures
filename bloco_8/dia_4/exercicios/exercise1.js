
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
    const newArray = arrays.reduce((result, element) => result.concat(element), [])

    return newArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);