// The "Merge Intervals" pattern in JavaScript is a common algorithmic problem that involves merging overlapping intervals in a collection. An interval is represented as an array with two elements: the start and end points. The goal is to merge overlapping intervals into a single interval or a set of non-overlapping intervals.

// Here's an implementation of the "Merge Intervals" pattern in JavaScript:


function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals; // No merging needed for one or zero intervals
    }

    // Sort intervals based on their start points
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // Check for overlap
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge intervals
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Add the non-overlapping interval to the result
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

// Example usage:
var intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
var mergedResult = mergeIntervals(intervals);

console.log("Merged Intervals:", mergedResult);
// Output: [[1, 6], [8, 10], [15, 18]]
// Let's break down the code:

// function mergeIntervals(intervals): This is the main function that takes an array of intervals as input and returns the merged intervals.

// if (intervals.length <= 1) { return intervals; }: If there's only one or zero intervals, no merging is needed, so the function returns the input array.

// intervals.sort((a, b) => a[0] - b[0]);: Sort the intervals based on their start points.

// Initialize an array mergedIntervals with the first interval from the sorted list.

// Iterate through the sorted intervals starting from the second one.

// Check for overlap with the last merged interval. If there's an overlap, update the end point of the last merged interval to include the current interval.

// If there's no overlap, add the current interval to the result as a new merged interval.

// Continue this process until all intervals are processed.

// The final result is an array of merged intervals.

// The time complexity of this algorithm is O(n log n) due to the sorting step, where n is the number of intervals. The merging step is done in linear time. The space complexity is O(1) since the algorithm does not use additional space proportional to the input size.