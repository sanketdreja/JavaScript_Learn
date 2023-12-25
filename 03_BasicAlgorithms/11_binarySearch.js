// Binary search is a search algorithm that finds the position of a target value within a sorted array. The basic idea is to divide the array into halves and eliminate the half in which the target cannot lie. Here's an implementation of binary search in JavaScript:


function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Discard the left half
        } else {
            high = mid - 1; // Discard the right half
        }
    }

    return -1; // Target not found
}

// Example usage:
var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 6;
var result = binarySearch(sortedArray, target);

console.log("Index of", target, ":", result);
// Output: Index of 6: 5
// Let's break down the code:

// function binarySearch(arr, target): This is the main function that takes a sorted array arr and a target value target as inputs.

// Initialize two pointers, low and high, representing the range of elements to consider in the array.

// Use a while loop to continue the search as long as the low pointer is less than or equal to the high pointer.

// Calculate the middle index, mid, using (low + high) / 2.

// Check if the element at the middle index, arr[mid], is equal to the target. If so, return the index mid as the target is found.

// If arr[mid] is less than the target, discard the left half by updating low to mid + 1.

// If arr[mid] is greater than the target, discard the right half by updating high to mid - 1.

// Repeat the process until the target is found or the search space is empty.

// If the loop exits and the target is not found, return -1.

// The time complexity of binary search is O(log n), where n is the number of elements in the array. This makes binary search very efficient for large datasets compared to linear search algorithms. However, it is important to note that the array must be sorted for binary search to work correctly.