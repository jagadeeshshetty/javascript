
class Search {
    constructor(array, itemToSearch) {
        this.array = array;
        this.itemToSearch = itemToSearch;
    }

    linearSearch() {
        // 1. If the array is empty, return -1.
        if (this.array.length === 0) return -1;

        // 2. Loop through the array. If the item is found, return the index.
        for (let index = 0; index < this.array.length; index++) {
            if (this.array[index] === this.itemToSearch) return index;
        }

        // 3. If the item is not found, return -1.
        return -1;
    }

    binarySearch() {
        // 1. If the array is empty, return -1.
        if (this.array.length === 0) return -1;

        // 2. Get the middle index of the array.
        const middleIndex = Math.floor(this.array.length / 2);

        // 3. If the middle index is the item, return the index.
        if (this.array[middleIndex] === this.itemToSearch) return middleIndex;

        // 4. If the item is greater than the middle index, search the right side of the array.
        if (this.array[middleIndex] < this.itemToSearch) {
            return this.binarySearch(this.array.slice(middleIndex + 1), this.itemToSearch);
        }

        // 5. If the item is less than the middle index, search the left side of the array.
        return this.binarySearch(this.array.slice(0, middleIndex), this.itemToSearch);
    }
}

function main() {
    const search = new Search([1, 2, 3, 4, 5, 6], 1);
    console.log(search.binarySearch());
}

main();

module.exports = Search;
