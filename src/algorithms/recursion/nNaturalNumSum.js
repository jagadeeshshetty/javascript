
let finalSum = 0;

/**
 * Function should return the N natural numbers sum.
 * Example
 * N = 5, Sum = 15
 * Description: 1 + 2 + 3 + 4 + 5 = 15
 */
function findSum(startNum, uptoNum, sum) {
  // Base case.
  if (startNum == uptoNum) {
    sum = sum + startNum;
    finalSum = sum;
    return;
  }
  // First step.
  sum = sum + startNum;
  // Recursion.
  findSum(startNum + 1, uptoNum, sum);
  // 1 -> findSum(2, 5, 1)
  // 2 -> findSum(3, 5, 3)
  // 3 -> findSum(4, 5, 6)
  // 4 -> findSum(5, 5, 10) -> Base case
  return finalSum;
}

console.log('Sum of 5 natural numbers: ' + findSum(1, 5, 0));
console.log('Sum of 10 natural numbers: ' + findSum(1, 10, 0));
console.log('Sum of 100 natural numbers: ' + findSum(1, 100, 0));
console.log('Sum of 1000 natural numbers: ' + findSum(1, 1000, 0));
