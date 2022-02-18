
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
function bubbleSort(array) { // O(n^2)
    let tmp;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

// console.log(bubbleSort([4, 3, 2, 1]));
// console.log(bubbleSort([1, 2, 3, 4]));
// console.log(bubbleSort([1, 2]));
// console.log(bubbleSort([2]));
// console.log(bubbleSort([]));

module.exports = bubbleSort;