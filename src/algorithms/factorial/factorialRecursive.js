
/**
 * Find the factorial of a given number through recursion.
 *
 * @param {number} number
 * @returns {number}
 *
 * Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial
 */
function factorialRecursive(number) {
    // base case
    if (number <= 1) return 1;

    // 4 x 3 x 2 x 1
    let result = number * factorialRecursive(number - 1);
    // 1 Iteration: 4 * factorialRecursive(3) -> 4 * 6 = 24 return value
    // 2 Iteration: 3 * factorialRecursive(2) -> 3 * 2 = 6
    // 3 Iteration: 2 * factorialRecursive(1) -> 2 * 1 = 2
    // 4 Iteration: 1 * factorialRecursive(0)  -> return 1 as base case

    return result;
}

module.exports = factorialRecursive;
