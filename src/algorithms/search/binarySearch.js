
function binarySearch(array, target) {
    // 1. If the array is empty, return -1.
    if (array.length === 0) return -1;
    // 2. Set the start and end indexes to the first and last indexes of the array.
    let start = 0;
    // 3. Set the middle index to the average of the start and end indexes.
    let end = array.length - 1;
    // 4. Check if the middle index is the target. If it is, return the middle index.
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
        if (array[middle] === target) return middle;

        // 5. If the target is less than the middle index, search the left side of the array.
        if (target < array[middle]) {
            end = middle - 1;
        } else {
            // 6. If the target is greater than the middle index, search the right side of the array.
            start = middle + 1;
        }
        // 7. Set the middle index to the average of the start and end indexes.
        middle = Math.floor((start + end) / 2);
    }

    return -1;
}

module.exports = binarySearch;
