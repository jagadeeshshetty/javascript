
function binarySearch(array, itemToSearch) {
    // 1. If the array is empty, return -1.
    if (array.length === 0) return -1;
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    // 2. Check if the middle index is the item. If it is, return the index.
    if (array[middle] === itemToSearch) return middle;

    // 3. If the item is greater than the middle index, search the right side of the array.
    if (itemToSearch < array[middle]) {
        end = middle - 1;
    } else if (itemToSearch > array[middle]) {
        start = middle + 1;
    }
        
    }

    return -1;
}

module.exports = binarySearch;
