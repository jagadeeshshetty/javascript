/*
Array: Remove all even integers from an array
---------------------------------------------

Problem statement:
Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.

Input: An array of random integers
[1,2,4,5,10,6,3]

Output: an array containing only odd integers
[1,5,3]

There are two ways you could solve this coding problem in an interview. Let’s discuss each.
*/

function removeEven1(arr) {
    var i;
    for (i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

function removeEven2(arr) {
    var _arr = [];
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] % 2 !== 0) {
            _arr.push(arr[i]);
        }
    }
    return _arr;
}

function removeEven3(arr) {
    // return arr.filter((i) => { return i % 2 !== 0 }); // O(n)
    return arr.filter(i => i % 2 !== 0); // O(n)
}

console.log(removeEven1([1, 2, 4, 5, 10, 6, 3]));
console.log(removeEven2([1, 2, 4, 5, 10, 6, 3]));
console.log(removeEven3([1, 2, 4, 5, 10, 6, 3]));
