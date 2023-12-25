// The two-pointer approach is a technique commonly used in algorithms and problem-solving to efficiently solve problems with linear data structures like arrays or linked lists. The basic idea is to use two pointers to traverse the data structure, usually from both ends, towards each other or in opposite directions. This approach is particularly useful for problems where a brute-force solution might be inefficient.

// Here's a detailed explanation of the two-pointer approach in JavaScript:

// Basic Concept:
// Initialize Pointers:

// Start with two pointers, often initialized at different positions in the array or list.
// Move Pointers:

// Iterate through the array or list while adjusting the pointers based on certain conditions.
// Conditions:

// Define conditions for moving the pointers. The conditions are problem-specific and depend on the nature of the problem you're solving.
// Terminate:

// Terminate the iteration when the pointers meet or cross each other.
// Types of Two-Pointer Approach:
// Two Pointers Moving Towards Each Other:

// This is useful for problems where you are looking for a pair of elements (or indices) that satisfy a certain condition. Examples include the Two Sum problem or finding a pair with a given sum in a sorted array.

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // No such pair found
}
// Two Pointers Moving in the Same Direction:

// This is useful for problems where you need to maintain a certain condition or invariant. Examples include the Trapping Rain Water problem or removing duplicates from a sorted array.

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; // Length of the unique elements
}
// Key Points:
// Efficiency:

// The two-pointer approach often provides a more efficient solution compared to naive or brute-force methods.
// Sorting:

// Many two-pointer problems involve a sorted array or list, so sorting the input may be a crucial step.
// Handling Duplicates:

// Pay attention to how duplicates are handled, especially in problems involving removal or counting unique elements.
// Termination Condition:

// Ensure that you have a well-defined termination condition to avoid an infinite loop.
// Additional Pointers:

// Some problems may involve more than two pointers. For instance, problems related to 3SUM or 4SUM may require three or four pointers.
// Example Problem: Container With Most Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
// In this example, the two pointers (left and right) move towards each other, calculating the area of water trapped between the two heights. The pointers move towards each other because moving the pointer pointing to the shorter bar might lead to a larger area.

//=================================================================
// The Three Sum problem is a common coding interview question that asks you to find all unique triplets in an array that add up to a given target sum. Each triplet should be distinct, and the order of the elements in the triplet does not matter.

// Here's a detailed explanation and solution in JavaScript:

// Problem Statement:
// Given an array of integers nums and an integer target, return all the unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == target. You may return the answer in any order.

// Example:

const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;

// Expected output: [[-1, 0, 1], [-1, -1, 2]]
// Approach:
// Sort the Array:

// Sorting the array helps in efficiently finding triplets and handling duplicates.
// Fix one Element (i):

// Iterate over the sorted array. For each element nums[i], fix it as the first element of the triplet.
// Use Two Pointers for Remaining Elements (j, k):

// Use two pointers, left and right, to find the other two elements in the triplet. Start with left = i + 1 and right = nums.length - 1.
// Check Sum:

// Check if nums[i] + nums[left] + nums[right] is equal to the target.
// If yes, add [nums[i], nums[left], nums[right]] to the result.
// If no, adjust pointers based on whether the sum is less or greater than the target.
// Handle Duplicates:

// To avoid duplicate triplets, skip identical elements during iteration.

function threeSum(nums, target) {
  const result = [];

  // Sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
// Explanation:
// The code uses a combination of sorting and two-pointer approach to efficiently find unique triplets.
// The continue statement is used to skip duplicates, ensuring that each triplet is unique.
// The while loop adjusts the pointers based on the sum, and inner loops skip duplicates.
// The time complexity of this solution is O(n^2) due to the nested loops, and sorting takes O(n log n) time.
// Testing:

// const nums = [-1, 0, 1, 2, -1, -4];
// const target = 0;

const result = threeSum(nums, target);
console.log(result);
// The output of this example should be [[ -1, -1, 2 ], [ -1, 0, 1 ]], as these are the unique triplets that add up to the target sum.
