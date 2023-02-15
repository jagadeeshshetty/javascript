const assert = require('assert');
const {
  usingRecursion,
  usingForLoop,
  usingFormula,
} = require('../../../src/algorithms/recursion/naturalNumbersSum');

describe("find the n natural numbers sum using the 'Recursion'", function () {
  it('should return "Only natural numbers." for input less than 1', function () {
    assert.equal(usingRecursion(-1), 'Only natural numbers.');
    assert.equal(usingRecursion(0), 'Only natural numbers.');
  });
  it('should return 1 for input 1', function () {
    assert.equal(usingRecursion(1), 1);
  });
  it('should return the sum of first n natural numbers for input n', function () {
    assert.equal(usingRecursion(2), 3);
    assert.equal(usingRecursion(3), 6);
    assert.equal(usingRecursion(4), 10);
  });
});
