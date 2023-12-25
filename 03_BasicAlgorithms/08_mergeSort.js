
// Merge sort is a divide-and-conquer sorting algorithm that works by dividing the input array into smaller halves, recursively sorting each half, and then merging the sorted halves to produce the final sorted array. Here's an implementation of the merge sort algorithm in JavaScript:


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Already sorted
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from the left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left or right arrays, append them
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = mergeSort(unsortedArray);

console.log("Sorted array:", sortedArray);
// Let's break down the code:

// function mergeSort(arr): This is the main function that takes an array arr as an input and sorts it using the merge sort algorithm. If the array has one or fewer elements, it is already sorted, and the function returns the array.

// const middle = Math.floor(arr.length / 2);: It calculates the middle index of the array.

// const leftHalf = arr.slice(0, middle); and const rightHalf = arr.slice(middle);: These lines split the array into two halves.

// The function recursively calls mergeSort on the left and right halves.

// The sorted left and right halves are then passed to the merge function for merging.

// function merge(left, right): This function takes two sorted arrays (left and right) as input and merges them into a single sorted array.

// let result = []; let leftIndex = 0; let rightIndex = 0;: These variables are used to keep track of the merged array and the indices of elements in the left and right arrays.

// The while loop compares elements from the left and right arrays and merges them in sorted order.

// The loop continues until either the left or right array is exhausted.

// The remaining elements in the left or right array are then appended to the result.

// The final sorted array is returned.

// The time complexity of the merge sort algorithm is O(n log n), making it more efficient than quadratic-time algorithms like bubble sort and selection sort for large datasets. It is a stable sorting algorithm, and its main drawback is the additional space complexity required for the merging step.





