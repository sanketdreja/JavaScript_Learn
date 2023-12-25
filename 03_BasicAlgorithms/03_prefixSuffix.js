// The term "prefix-suffix" is commonly associated with string algorithms, particularly in the context of pattern matching and searching. In this explanation, I'll focus on the concept of prefix and suffix functions in the context of string matching. The prefix-suffix algorithm is often used to efficiently find occurrences of a pattern within a text.

// Prefix Function:
// The prefix function, often denoted as pi(π)
// π, is a function defined on a string that, for each position
// i, represents the length of the longest proper prefix (excluding the entire string) that is also a suffix of the substring ending at position
// i. In other words, it tells us the length of the longest border of the substring ending at position
// i.

// For example, given the string "ababaca," the prefix function is calculated as follows:

// i:  0 1 2 3 4 5 6
// -----------------
// s: a b a b a c a
// π: 0 0 1 2 3 0 1

// Here,
//   π[2]=1
// π[2]=1 because "ab" is the longest proper prefix (excluding the entire string) that is also a suffix of the substring ending at position 2.

// Suffix Function:
// The suffix function, often denoted as τ
// τ, is the reverse of the prefix function. For each position  i
// i, it represents the length of the longest proper suffix (excluding the entire string) that is also a prefix of the substring starting at positioni.

// Using the same example, the suffix function is calculated as follows:
// i:  0 1 2 3 4 5 6
// -----------------
// s: a b a b a c a
// τ: 0 0 1 2 3 0 1
// Here,
//   τ[2]=1
// τ[2]=1 because "ba" is the longest proper suffix (excluding the entire string) that is also a prefix of the substring starting at position 2.

// Prefix-Suffix Algorithm:
// The prefix-suffix algorithm is often used in the context of pattern matching, particularly in the Knuth-Morris-Pratt (KMP) algorithm. The idea is to use the information from the prefix function to efficiently skip unnecessary comparisons while searching for occurrences of a pattern in a text.

// Here's a simplified example of how the prefix-suffix algorithm can be used in a string matching context in JavaScript:

function buildPrefixFunction(pattern) {
  const m = pattern.length;
  const π = [0];

  let k = 0;
  for (let q = 1; q < m; q++) {
    while (k > 0 && pattern[k] !== pattern[q]) {
      k = π[k - 1];
    }
    if (pattern[k] === pattern[q]) {
      k++;
    }
    π[q] = k;
  }

  return π;
}

function searchPattern(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const π = buildPrefixFunction(pattern);

  let q = 0;
  for (let i = 0; i < n; i++) {
    while (q > 0 && pattern[q] !== text[i]) {
      q = π[q - 1];
    }
    if (pattern[q] === text[i]) {
      q++;
    }
    if (q === m) {
      console.log(`Pattern found at index ${i - m + 1}`);
      q = π[q - 1];
    }
  }
}

// Example usage:
const text = "ababacababaca";
const pattern = "abaca";
searchPattern(text, pattern);

// This example demonstrates the basic structure of the KMP algorithm, which utilizes the prefix function to efficiently skip unnecessary comparisons during the search process.

// Understanding the details of the prefix-suffix algorithm is crucial for effective string matching algorithms, and it plays a key role in the efficiency of algorithms like KMP.
