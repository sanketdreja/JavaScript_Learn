// QuickSort is another efficient sorting algorithm that follows the divide-and-conquer paradigm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. Here's an implementation of the QuickSort algorithm in JavaScript:

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Choose a random pivot
  const left = [];
  const right = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    }
    // If the element is equal to the pivot, you can choose whether to include it in the left or right sub-array
    // For simplicity, we are excluding it from both in this example.
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = quickSort(unsortedArray);

console.log("Sorted array:", sortedArray);
// Let's break down the code:

// function quickSort(arr): This is the main function that takes an array arr as an input and sorts it using the QuickSort algorithm. If the array has one or fewer elements, it is already sorted, and the function returns the array.

// const pivot = arr[Math.floor(Math.random() * arr.length)];: It chooses a random element from the array as the pivot. This helps avoid worst-case scenarios for already sorted or nearly sorted arrays.

// Two arrays, left and right, are initialized to store elements less than and greater than the pivot, respectively.

// The for...of loop iterates through each element of the array, partitioning elements into the left and right arrays based on their relationship to the pivot.

// The function then recursively calls itself on the left and right sub-arrays.

// The results of the recursive calls are concatenated with the pivot in the middle to form the final sorted array.

// The final sorted array is returned.

// QuickSort has an average time complexity of O(n log n), making it efficient for large datasets. However, in the worst case, when the pivot selection consistently results in an unbalanced partition, the time complexity can degrade to O(n^2). Randomized pivot selection or other strategies can be employed to mitigate this risk.
