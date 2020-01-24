
# Covers DS and Algorithms in Javascript

An array is the most fundamental data structure, which stores elements at a contiguous memory location. We can solve reversing an array, sorting the array, or searching elements on the array etc

The key benefit of an array data structure is that it offers fast O(1) search if we know the index, but adding and removing an element from an array is slow because we cannot change the size of the array once it’s created.

In order to create a shorter or longer array, we need to create a new array and copy all elements from old to new. The key to solving array-based questions is having a good knowledge of array data structure as well as basic programming constructors such as loop, recursion, and fundamental operators.

## Practice questions:

1. How do you find the missing number in a given integer array of 1 to 100?
2. How do you find the duplicate number on a given integer array?
3. How do you find the largest and smallest number in an unsorted integer array?
4. How do you find all pairs of an integer array whose sum is equal to a given number?
5. How do you find duplicate numbers in an array if it contains multiple duplicates?
6. How are duplicates removed from a given array in Java?
7. How is an integer array sorted in place using the quicksort algorithm?
8. How do you remove duplicates from an array in place?
9. How do you reverse an array of elements?
    1. Create empty array object.
    2. Get the last index number of base array.
    3. Loop through base array from last index till O index.
    4. Add base array last index value to new empty array start from first index.
```javascript
function reverseArray(array) {
    let newArray = [];
    let indexToRead = array.length - 1;
    for (let i = indexToRead; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

reverseArray([10, 20, 30, 40, 50]);
```
10. How are duplicates removed from an array without using any library?

## Reference

[simpleprogrammer](https://simpleprogrammer.com/programming-interview-questions/)
