let numbers = [1, -1, 2, 3];

// find sum using for-of loop
let sum = 0;
for (const number of numbers) {
  sum = sum + number;
}
// console.log(sum);

// find sum using reduce function
let sum1 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(sum1);

// optimized reduce function
let sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum2);
