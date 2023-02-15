const assert = require('assert');

/**
 * The GCD of two or more non-zero integers is the largest positive integer that divides each of the integers without a remainder.
 *
 * It can be calculated using the Euclidean algorithm or the more efficient binary GCD algorithm.
 */

/**
 * The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two or more integers.
 * It is based on the fact that the GCD of two numbers also divides their difference.
 *
 * The algorithm proceeds as follows:
 * 1. Start with the two numbers for which you want to find the GCD.
 * 2. Divide the larger number by the smaller number, and store the remainder.
 * 3. Replace the larger number with the smaller number and the smaller number with the remainder from step 2.
 * 4. Repeat steps 2 and 3 until the remainder is 0. At this point, the smaller number is the GCD of the original two numbers.
 * @param {*} num1
 * @param {*} num2
 * @returns {Number} number
 */
function myImpl(firstNum, secondNum) {
  while (firstNum !== secondNum) {
    firstNum > secondNum ? (firstNum -= secondNum) : (secondNum -= firstNum);
  }
  return firstNum;
}

// console.log(myImpl(10, 15));
// console.log(myImpl(60, 72));
// console.log(myImpl(3, 7));
// console.log(myImpl(40, 24));

/**
 * Euclidean algorithm
 * -------------------
 * The Euclidean algorithm is an ancient method for finding the greatest common divisor of two integers.
 * The basic idea is to repeatedly subtract the smaller number from the larger number until the result is zero.
 * The last non-zero remainder is the greatest common divisor. For example, to find the GCD of 60 and 48:
 *
 * 60 = 48 * 1 + 12
 * 48 = 12 * 4 + 0
 *
 * so GCD(60,48) = 12

 * @param {*} a
 * @param {*} b
 * @returns
 */
function euclideanAlgo(a, b) {
  // base case: if b is 0, return a
  if (b == 0) {
    return a;
  }
  // recursive call, using the remainder of a and b as the new b
  return euclideanAlgo(b, a % b);
}

// console.log(euclideanAlgo(60, 48)); // Output: 12
/**
 * Binary GCD algorithm
 * --------------------
 * On the other hand, the binary GCD algorithm, also known as Stein's algorithm, is a more efficient method for finding the GCD of two integers.
 * It uses a combination of division and bit manipulation to reduce the number of operations required.
 * The basic idea is to divide out all of the common powers of 2, then use the remaining odd numbers to compute the GCD using the Euclidean algorithm.
 * It is faster than the Euclidean algorithm because it takes advantage of the fact that many operations can be done using bit manipulation, which is faster than traditional division and multiplication.

 * @param {*} a
 * @param {*} b
 * @returns
 */
function binaryGCD(a, b) {
  // base case: if a or b is 0, return the non-zero number
  if (a == 0) {
    return b;
  }
  if (b == 0) {
    return a;
  }

  let shift = 0;
  // remove common factors of 2
  while ((a & 1) == 0 && (b & 1) == 0) {
    a >>= 1;
    b >>= 1;
    shift++;
  }
  // remove remaining factors of 2 from a
  while ((a & 1) == 0) {
    a >>= 1;
  }
  // remove remaining factors of 2 from b
  while ((b & 1) == 0) {
    b >>= 1;
  }

  // use the Euclidean algorithm to find the GCD
  while (a != b) {
    if (a > b) {
      a -= b;
      while ((a & 1) == 0) {
        a >>= 1;
      }
    } else {
      b -= a;
      while ((b & 1) == 0) {
        b >>= 1;
      }
    }
  }

  // multiply by 2^shift to account for factors of 2 removed earlier
  return a << shift;
}

// console.log(binaryGCD(60, 48)); // Output: 12

describe('gcd using euclidean algorithm', function () {
  it('should return the GCD of 60 and 48 to be 12', function () {
    assert.equal(euclideanAlgo(60, 48), 12);
  });
  it('should return the GCD of 10 and 25 to be 5', function () {
    assert.equal(euclideanAlgo(10, 25), 5);
  });
  it('should return the GCD of 15 and 25 to be 5', function () {
    assert.equal(euclideanAlgo(15, 25), 5);
  });
  it('should return the GCD of 15 and 0 to be 15', function () {
    assert.equal(euclideanAlgo(15, 0), 15);
  });
  it('should return the GCD of 0 and 15 to be 15', function () {
    assert.equal(euclideanAlgo(0, 15), 15);
  });
});

describe('gcd using binary GCD algorithm', function () {
  it('should return the GCD of 60 and 48 to be 12', function () {
    assert.equal(binaryGCD(60, 48), 12);
  });
  it('should return the GCD of 10 and 25 to be 5', function () {
    assert.equal(binaryGCD(10, 25), 5);
  });
  it('should return the GCD of 15 and 25 to be 5', function () {
    assert.equal(binaryGCD(15, 25), 5);
  });
  it('should return the GCD of 15 and 0 to be 15', function () {
    assert.equal(binaryGCD(15, 0), 15);
  });
  it('should return the GCD of 0 and 15 to be 15', function () {
    assert.equal(binaryGCD(0, 15), 15);
  });
});
