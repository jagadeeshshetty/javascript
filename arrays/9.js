
// 9. How do you reverse an array of elements?

function reverseArray(array) {
    // [1] Create empty array object.
    let newArray = [];
    // [2] Get the last index number of base array.
    let lastIndex = array.length - 1;
    // [3] Loop through base array from last index till O index.
    for (let i = lastIndex; i >= 0; i--) {
        // [4] Add base array last index value to new empty array start from first index.
        newArray.push(array[i]);
    }
    return newArray;
};

console.log(reverseArray([30, 40, 50, 60, 70, 80, 90]));
