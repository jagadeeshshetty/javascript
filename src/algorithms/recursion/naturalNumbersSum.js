// Implement using Recursion
function usingRecursion(n) {
  if (n < 1) return 'Only natural numbers.';

  //base case
  if (n === 1) return 1;

  //recursion
  return n + usingRecursion(n - 1);
}
// console.log(usingRecursion(5));

// Implement using for loop.
function usingForLoop(n) {
  if (n < 1) return 'Only natural numbers.';

  let sum = 0;
  for (let num = n; num >= 1; num--) {
    sum = sum + num;
  }
  return sum;
}
// console.log(usingForLoop(5));

// Implement using formula
function usingFormula(n) {
  if (n < 1) return 'Only natural numbers.';

  return (n * (n + 1)) / 2;
}

// console.log(usingFormula(5));

module.exports = { usingRecursion, usingForLoop, usingFormula };
