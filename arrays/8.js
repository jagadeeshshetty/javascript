
// 8. How do you remove duplicates from an array in place?

function removeDuplicates(array) {
    // [1] Create empty array object.
    let newArray = [];
    // [2] Get the length of base array.
    let len = array.length;
    // [3] Loop through base array elements.
    for (let i = 0; i < len; i++) {
        // [4] Check element present in new array.
        // indexOf() returns 0 if element present and -1 if not.
        if (newArray.indexOf(array[i]) === -1)
            newArray.push(array[i]);
    }
    return newArray;
};

console.log(removeDuplicates([30, 30, 40, 50, 60, 70, 70, 80, 90]));
