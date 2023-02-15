const findMaxNum = require('../../../src/algorithms/search/findMaxNum');
const assert = require('assert');
const _assert = require('chai').assert;

describe('find the maximum number in an array', () => {
  it('should return the maximum number in the array', () => {
    assert.equal(findMaxNum([1, 2, 3]), 3);
    assert.equal(findMaxNum([5, 10, 15]), 15);
  });

  it('should throw an error if the array is empty', () => {
    assert.throws(() => findMaxNum([]), Error, 'Empty array.');
  });

  it('should return an error message if the array contains non-numeric elements', () => {
    assert.throws(
      () => findMaxNum([1, 2, 'three']),
      Error,
      'Only numbers accepted!'
    );
  });
});
