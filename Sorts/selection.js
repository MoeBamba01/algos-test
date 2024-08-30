// Plain Js
const arr = [10, 3, 5, 8, 4, 2];

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
    }

console.log(selectionSort(arr)); 