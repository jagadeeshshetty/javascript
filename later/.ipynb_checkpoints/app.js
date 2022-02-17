
const numbers = arrayFromRange(1, 4);
const numbers1 = arrayFromRange(-1, 4);
const numbers2 = arrayFromRange(-4, -2);
const numbers3 = arrayFromRange(-1, -4);

console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(numbers1); // [ -1, 0, 1, 2, 3, 4 ]
console.log(numbers2); // [ -4, -3, -2 ]
console.log(numbers3); // [ -4, -3, -2, -1 ]

function arrayFromRange(min, max) {
    let resultArray = [];

    // Swap using object destructuring.
    if (min > max) [min, max] = [max, min]

    // Swap using extra variable.
    // if (min > max) {
    //     let tmp = max;
    //     max = min;
    //     min = tmp;
    // }

    for (let number = min; number <= max; number++) {
        resultArray.push(number);
    }

    return resultArray;
}
