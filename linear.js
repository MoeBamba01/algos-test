// Plain JavaScript implementation of linear search algorithm
// function linearSearch (arr, target) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr [i] === target){
//             return i;
//         }
//     }
//     return -1;
// }
// Time complexity: O(n)

// ES6 Version

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr [i] === target){
            return i;
        }
    }
    return -1;
}

// Usage
const arr = [10,20,30,40,50];
console.log(linearSearch(arr,40 )); // 4
console.log(linearSearch(arr, 10)); // -1