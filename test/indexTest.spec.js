const RomanNumber = require('../src');
const assert = require('assert');

suite('RomanNumber', () => {
  test('1 to 10', () => {
    const expectedResult = {1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX', 10:'X'};
    for(i = 1; i <= 10; i++) {
      assert.equal(RomanNumber(i), expectedResult[i]);
    };
  });
});
