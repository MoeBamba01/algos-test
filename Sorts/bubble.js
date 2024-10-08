// Bubble short Plain Js
const arr = [10, 3, 5, 8, 4, 2];

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i -1; j++){
            
            if (arr[j] > arr[j +1]) {
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j +1] = temp;
            }
        }
    }
    return arr;
}

// es6 version
const bubbleSort = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i -1; j++){
            
            if (arr[j] > arr[j +1]) {
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j +1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8, 10]