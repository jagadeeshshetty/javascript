
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
