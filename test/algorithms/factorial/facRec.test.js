const factorial = require('../../../src/algorithms/factorial/facRec');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Find the factorial of a given number.', () => {
  it('should throw an error when called with a negative number', () => {
    assert.throws(() => factorial(-1), Error, 'Negative number.');
    expect(() => factorial(-1)).to.throw(Error, 'Negative number.');
  });

  it('should return 1 when called with 0', () => {
    expect(factorial(0)).to.equal(1);
  });

  it('should return 1 when called with 1', () => {
    expect(factorial(1)).to.equal(1);
  });

  it('should return 24 when called with 4', () => {
    assert.equal(factorial(4), 24);
  });

  it('should return 120 when called with 5', () => {
    expect(factorial(5)).to.equal(120);
  });

  it('should return 40320 when called with 8', () => {
    expect(factorial(8)).to.equal(40320);
  });

  it('should return 3628800 when called with 10', () => {
    expect(factorial(10)).to.equal(3628800);
  });
});
