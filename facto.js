// //  Plain Js
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// ES6 Version
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Time complexity: O(n)
