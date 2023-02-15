const { assert } = require('chai');

// find the sum of first and last digit from input number.
function findSum(number) {
  if (number < 0) return 'negative numbers not allowed';
  if (number < 10) return 'single digit number are not allowed';
  let firstNumber = Number(String(number)[0]);
  let lastNumber = number % 10;
  return firstNumber + lastNumber;
}

describe('test the findSum function', () => {
  it('should get a valid result', () => {
    assert.strictEqual(findSum(123), 4);
    assert.strictEqual(findSum(1231), 2);
    assert.strictEqual(findSum(1230), 1);
    assert.strictEqual(findSum(1239), 10);
    assert.strictEqual(findSum(11), 2);
    assert.strictEqual(findSum(1), 'single digit number are not allowed');
    assert.strictEqual(findSum(-1), 'negative numbers not allowed');
  });
});
