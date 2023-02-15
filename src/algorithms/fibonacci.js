/**
 *  1  +  1  +  2  +  3  +  4  +  5  +  6...
 * 1st   2nd   3rd   4th   5th   6th   7th..
 *
 * +---------+
 * | 1st = 1 | Base case
 * | 2nd = 1 |
 * +---------+
 * 3rd = 2
 * 4th = 3
 * 5th = 5
 * 6th = 8
 * 7th = 13
 * ...
 *
 * @param {Number} n
 */
function findNthFiboNum(n) {
  // Base case
  if (n === 1 || n === 2) return 1;

  // Recursive call.
  // if i know (n-1) and (n-2) fibonacci number, i can find the nth fibonacci number.
  let partialAns1 = findNthFiboNum(n - 1);
  let partialAns2 = findNthFiboNum(n - 2);

  return partialAns1 + partialAns2;
}

module.exports = findNthFiboNum;
