
/**
 * Search for an element in a sorted array using linear search.
 *
 * @param {Array} array The array to search.
 * @param {Number} element The element to search for.
 * @return {Number} The index of the element in the array.
 * @example
 * linearSearch([1, 2, 3, 4, 5, 6], 1);
 * // => 0
 * linearSearch([1, 2, 3, 4, 5, 6], 6);
 * // => 5
 * linearSearch([1, 2, 3, 4, 5, 6], 7);
 * // => -1
 * linearSearch([], 7);
 * // => -1
 */
function linearSearch(array, itemToSearch) {
    // 1. If the array is empty, return -1.
    if (array.length === 0) return -1;

    // 2. Loop through the array. If the item is found, return the index.
    for (let index = 0; index < array.length; index++) {
        if (array[index] === itemToSearch) return index;
    }

    // 3. If the item is not found, return -1.
    return -1;
}

module.exports = linearSearch;
