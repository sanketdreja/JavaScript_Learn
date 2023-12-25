// Selection sort is a simple sorting algorithm that works by repeatedly selecting the minimum element from the unsorted part of the array and putting it at the beginning. The algorithm maintains two subarrays in a given array: one that is already sorted and another one that is unsorted. Here's an implementation of the selection sort algorithm in JavaScript:


function selectionSort(arr) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        // Find the minimum element in the unsorted part of the array
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// Example usage:
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = selectionSort(unsortedArray);

console.log("Sorted array:", sortedArray);
// Let's break down the code:

// function selectionSort(arr): This is the function that takes an array arr as an input and sorts it using the selection sort algorithm.

// var len = arr.length;: It initializes a variable len with the length of the array. This is used to determine the number of iterations needed.

// for (var i = 0; i < len - 1; i++) { ... }: This is a for loop that iterates through the array up to the second-to-last element.

// var minIndex = i;: It initializes a variable minIndex to keep track of the index of the minimum element in the unsorted part of the array.

// The nested for loop (for (var j = i + 1; j < len; j++) { ... }) iterates through the unsorted part of the array and finds the index of the minimum element.

// if (arr[j] < arr[minIndex]) { minIndex = j; }: This line updates minIndex if a smaller element is found.

// After finding the minimum element in the unsorted part, the algorithm swaps it with the first element in the unsorted part.

// The outer loop continues, and the process repeats until the entire array is sorted.

// The sorted array is then returned.

// The time complexity of the selection sort algorithm is O(n^2) in the worst case, where n is the number of elements in the array. Selection sort is not as efficient as more advanced sorting algorithms for large datasets but can be useful for small datasets or when memory usage is a concern.