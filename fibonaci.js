// Plain Js

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// ES6 Version
const fibonacci = n => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55

// Time complexity: O(2^n)