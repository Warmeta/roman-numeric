const RomanNumber = require('../src');
const assert = require('assert');

suite('RomanNumber', () => {
    test('1 => I', () => {
        assert.equal(RomanNumber(1),'I');
    });

    test('2 => II', () => {
        assert.equal(RomanNumber(2),'II');
    });
});