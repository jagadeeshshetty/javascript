
/**
 * Find the factorial of a given number.
 *
 * @param {number} number
 * @returns {number}
 *
 * @example
 * 4!
 * 4 * 3 * 2 * 1
 * => 24
 *
 * Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial
 */
function factorial(number) {
    // 1 x 2 x 3 x 4
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

module.exports = factorial;
