
/**
 * Sort an array using the bubble sort algorithm.
 *
 * @param {Array} array The array to sort.
 * @return {Array} The sorted array.
 *
 * @example
 * bubbleSort([3, 2, 1]);
 * // => [1, 2, 3]
 *
 * @algorithm
 * 1. Start at the beginning of the array.
 * 2. Compare the first element with the second element.
 * 3. If the first element is greater than the second element, swap them.
 * 4. Continue to the next pair of elements.
 * 5. Repeat until the array is sorted.
 * 6. Return the sorted array.
 *
 * [4, 2, 3, 1]
 * 4 > 2
 * swap [2, 4, 3, 1]
 * 4 > 3
 * swap [2, 3, 4, 1]
 * 4 > 1
 * swap [2, 3, 1, 4]
 *
 * Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial
 */
function bubbleSort(array) { // O(n^2)
    let tmp;
    let isSorted = true;

    // loop through all elements at least once
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            // compare current element with next element
            if (array[j] > array[j + 1]) {
                tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                isSorted = false;
            }
            if (isSorted) return array;
        }
    }

    return array;
}

module.exports = bubbleSort;