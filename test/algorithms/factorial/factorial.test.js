
const factorial = require('../../../src/algorithms/factorial/factorial');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('factorial', () => {
  it('should calculate factorial', () => {
    assert.equal(factorial(4), 24);
    expect(factorial(0)).to.equal(1);
    expect(factorial(1)).to.equal(1);
    expect(factorial(5)).to.equal(120);
    expect(factorial(8)).to.equal(40320);
    expect(factorial(10)).to.equal(3628800);
  });
});
