const assert = require('assert');
const findNthFiboNum = require('../../src/algorithms/fibonacci');

describe("find the nth fibonacci number using the 'Recursion'", function () {
  // it('should return "Only natural numbers." for input less than 1', function () {
  //   assert.equal(usingRecursion(-1), 'Only natural numbers.');
  //   assert.equal(usingRecursion(0), 'Only natural numbers.');
  // });
  it('should return 1 for input 1', function () {
    assert.equal(findNthFiboNum(1), 1);
  });
  it('should return 1 for input 2', function () {
    assert.equal(findNthFiboNum(2), 1);
  });
  it('should return the fibonacci number for nth term', function () {
    assert.equal(findNthFiboNum(5), 5);
    // assert.equal(findNthFiboNum(6), 8);
    // assert.equal(findNthFiboNum(7), 13);
  });
});
