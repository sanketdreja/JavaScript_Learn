// The sliding window algorithm is a technique used to efficiently process arrays or lists by maintaining a "window" of elements and moving that window through the array. It is particularly useful for solving problems involving subarrays or subsequences, where the goal is to find an optimal solution within a fixed-size window.

// Here's a detailed explanation of the sliding window algorithm in JavaScript:

// Basic Concept:
// Initialize Window:

// Define a window (subarray) of a fixed size in the array.
// Process Initial Window:

// Compute the result for the initial window.
// Slide the Window:

// Move the window to the right by one element at a time.
// Update Result:

// Update the result based on the new window.
// Repeat:

// Repeat steps 3-4 until the window reaches the end of the array.
// Types of Sliding Window:
// Fixed Size Window:

// Maintain a fixed-size window and process the result for each window.
// Variable Size Window:

// Allow the window size to vary based on certain conditions.
// Two Pointers:

// Use two pointers to represent the start and end of the window.
// Example Problem: Maximum Sum Subarray of Size K
// Given an array of integers and a positive integer k, find the maximum sum of any contiguous subarray of size k.

function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  // Calculate sum for the first window of size k
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    // Subtract the element going out of the window
    currentSum -= arr[i - k];
    // Add the new element entering the window
    currentSum += arr[i];
    // Update the maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
// Explanation:
// The code initializes the currentSum with the sum of the first window of size k.
// It then slides the window through the array, updating the currentSum by subtracting the element going out and adding the new element entering the window.
// The maximum sum (maxSum) is continuously updated as the window moves.
// Testing:

const arr = [2, 1, 3, 4, 1, 2, 6];
const k = 3;

const result = maxSumSubarray(arr, k);
console.log(result); // Output: 9 (sum of subarray [3, 4, 2])
// Use Cases:
// Maximum/Minimum Subarray Sum:

// Find the maximum or minimum sum of a contiguous subarray of a given size.
// Fixed Size Window Problems:

// Problems that involve processing a fixed-size window of elements efficiently.
// String Problems:

// Substring problems, anagrams, and problems involving characters or words.
// Optimization Problems:

// Problems where the goal is to optimize a certain parameter (e.g., maximize or minimize).
// Advantages:
// Time Complexity:

// The sliding window algorithm often has better time complexity compared to naive approaches.
// Space Complexity:

// It requires constant space, making it memory-efficient.
// Conclusion:
// The sliding window algorithm is a powerful technique for efficiently processing arrays or lists with fixed-size windows. It is a versatile approach that can be applied to a variety of problems, including those involving subarrays, substrings, or sequences. Understanding the underlying concept and practicing it on different problems will help you become proficient in using the sliding window algorithm.
