
// Kadane's Algorithm is a well-known algorithm for finding the maximum subarray sum in an array of integers. The algorithm is efficient and has a time complexity of O(n). Here's a detailed explanation and implementation of Kadane's Algorithm in JavaScript:

// Problem Statement:
// Given an array of integers, find the contiguous subarray (containing at least one element) with the largest sum and return its sum.

// Approach:
// Kadane's Algorithm is based on the idea that at any position 
// �
// i, the maximum subarray sum ending at 
// �
// i is either the element at 
// �
// i itself or the sum of the maximum subarray ending at 
// �
// −
// 1
// i−1 and the element at 
// �
// i.

// Initialize Variables:

// Initialize two variables, maxEndingHere and maxSoFar, to track the maximum subarray sum ending at the current position and the maximum subarray sum overall.
// Iterate Through the Array:

// Iterate through the array, updating maxEndingHere and maxSoFar at each step.
// Update maxEndingHere:

// For each element at position 
// �
// i, calculate the maximum subarray sum ending at 
// �
// i, considering whether to start a new subarray or extend the current one.
// Update maxSoFar:

// Update maxSoFar to store the maximum subarray sum encountered so far.
// JavaScript Code:

function kadanesAlgorithm(nums) {
    if (nums.length === 0) {
        return 0; // Empty array case
    }

    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum subarray sum ending at position i
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

        // Update the overall maximum subarray sum
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
// Testing:

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = kadanesAlgorithm(nums);
console.log(result); // Output: 6 (subarray [4, -1, 2, 1])
// Explanation:
// In the example, the maximum subarray sum is obtained by the subarray [4, -1, 2, 1] with a sum of 6.
// The algorithm updates maxEndingHere and maxSoFar at each step to efficiently find the maximum subarray sum.
// Edge Cases:
// The algorithm handles empty arrays gracefully by returning 0.
// If all elements in the array are negative, the algorithm still works, returning the smallest negative value.
// Time Complexity:
// The time complexity of Kadane's Algorithm is O(n), where n is the length of the input array. The algorithm iterates through the array once, updating the maximum subarray sum in constant time at each step.

// Kadane's Algorithm is a powerful and efficient technique for solving the maximum subarray sum problem, and it is widely used in various applications, including dynamic programming and algorithmic challenges.