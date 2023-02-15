/**
 * Find the factorial of a given number through recursion.
 * Ex: 5! = 4 x 3 x 2 x 1
 *
 * @param {number} n
 * @returns {number}
 *
 * 5 * fac(4)
 *     '-> 4 * fac(3)
 *             '-> 3 * fac(2)
 *                     '-> 2 * fac(1)
 *                             '-> As n equals 1, base case triggers and return 1.
 *                        2 * 1 <-'
 *                  3 * 2 <-'
 *            4 * 6 <-'
 *     5 * 24 <-'
 * 120 <-'
 * Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial
 */
function fac(n) {
  // Base case
  if (n < 0) throw new Error('Negative number.');
  if (n === 0) return 1;

  // Recursive call
  return fac(n - 1) * n;
}

module.exports = fac;
