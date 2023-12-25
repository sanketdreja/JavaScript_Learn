// Insertion sort is another simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort is often more efficient on small lists or nearly sorted lists. Here's an implementation of the insertion sort algorithm in JavaScript:

function insertionSort(arr) {
    var len = arr.length;

    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key at its correct position in the sorted subarray
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = insertionSort(unsortedArray);

console.log("Sorted array:", sortedArray);
// Let's break down the code:

// function insertionSort(arr): This is the function that takes an array arr as an input and sorts it using the insertion sort algorithm.

// var len = arr.length;: It initializes a variable len with the length of the array. This is used to determine the number of iterations needed.

// for (var i = 1; i < len; i++) { ... }: This is a for loop that iterates through the array starting from the second element (i = 1).

// var key = arr[i]; var j = i - 1;: It initializes two variables: key holds the current element being considered for insertion, and j is the index of the previous element.

// while (j >= 0 && arr[j] > key) { ... }: This is a while loop that iterates through the sorted part of the array (from arr[0] to arr[i-1]) and shifts elements to the right until the correct position for key is found.

// arr[j + 1] = key;: This line places the key at its correct position in the sorted subarray.

// The loop continues until all elements are sorted.

// The sorted array is then returned.

// The time complexity of the insertion sort algorithm is O(n^2) in the worst case, where n is the number of elements in the array. Like bubble sort, insertion sort is more efficient for small datasets or nearly sorted lists.