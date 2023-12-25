// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list. Here's an implementation of the bubble sort algorithm in JavaScript:


function bubbleSort(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;

        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage:
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = bubbleSort(unsortedArray);

console.log("Sorted array:", sortedArray);
// Let's break down the code:

// function bubbleSort(arr): This is the function that takes an array arr as an input and sorts it using the bubble sort algorithm.

// var len = arr.length;: It initializes a variable len with the length of the array. This is used to determine the number of iterations needed.

// var swapped;: This variable is used to track whether any swaps were made during a pass through the array. If no swaps are made during an iteration, the array is considered sorted, and the algorithm terminates.

// do { ... } while (swapped);: This is a do-while loop that continues to iterate through the array as long as swaps are being made.

// for (var i = 0; i < len - 1; i++) { ... }: This is a nested for loop that iterates through the array. If an element is greater than its adjacent element, it swaps them.

// if (arr[i] > arr[i + 1]) { ... }: This is the condition to check if a swap is needed.

// var temp = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = temp;: These lines perform the actual swapping of elements.

// swapped = true;: This flag is set to true if a swap is made during the iteration.

// The loop continues until a pass through the array is made without any swaps, indicating that the array is sorted.

// The sorted array is then returned.

// The time complexity of the bubble sort algorithm is O(n^2) in the worst case, where n is the number of elements in the array. This makes it inefficient for large datasets, and it is mainly used for educational purposes or small datasets.