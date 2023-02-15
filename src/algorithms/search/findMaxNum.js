/**
 *  findMaxNum - function to find the maximum number from an array of numbers.
 *
 * @param {Array} numbers - Array of numbers
 * @returns {Number} max - Maximum number from the array
 * @throws {Error} - If the input array is empty, it throws an error 'Empty array.'
 * @throws {Error} - If the input array contains non-integer elements, it throws an error 'Only numbers accepted!'
 */

function findMaxNum(numbers) {
  // If the input array is empty, throw an error
  if (numbers.length === 0) throw new Error('Empty array.');

  // Initialize variable max with the first element of the array
  let max = numbers[0];

  // Iterate through the array
  numbers.forEach((num) => {
    // Check if the current element is an integer
    if (Number.isInteger(num)) {
      // Update max if the current element is greater than max
      max = num > max ? num : max;
    } else {
      // If the current element is not an integer, return the error message
      throw new Error('Only numbers accepted!');
    }
  });
  return max;
}

module.exports = findMaxNum;

// There are several ways to improve the code:

// Instead of using the forEach method to iterate through the array, you could use the for-of loop, which is more efficient for large arrays.

// You can use the Array.prototype.every() method to check if all elements in the array are integers. This would make the code more efficient, as it would stop iterating as soon as it finds a non-integer element.

// You can use the spread operator (...) to convert the array into a list of arguments. Then you can use the Math.max() function to find the maximum number, which would be more efficient for large arrays.

// Instead of assigning a string "Only numbers accepted!" to the max variable when it finds non-integer elements, you can throw an error.

// function findMaxNum(numbers) {
//   if (numbers.length === 0) throw new Error('Empty array.');

//   if (!numbers.every(Number.isInteger)) {
//     throw new Error('Only numbers accepted!');
//   }
//   return Math.max(...numbers);
// }
// By using the above code, you can improve the performance of the function and also it will throw the error message in a better way when it encounters non-integer elements.
