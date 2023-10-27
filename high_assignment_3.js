/* Write a JavaScript function to find the longest common subsequence between two strings.

Input: longestCommonSubsequence("AGGTAB", "GXTXAYB")
Expected Output: "GTAB" */

const longestCommonSubsequence = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;
  const commonSubsequence = Array.from(Array(m + 1), () =>
    Array(n + 1).fill("")
  );
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        commonSubsequence[i][j] = "";
      } else if (str1[i - 1] === str2[j - 1]) {
        commonSubsequence[i][j] = commonSubsequence[i - 1][j - 1] + str1[i - 1];
      } else {
        commonSubsequence[i][j] =
          commonSubsequence[i - 1][j].length >
          commonSubsequence[i][j - 1].length
            ? commonSubsequence[i - 1][j]
            : commonSubsequence[i][j - 1];
      }
    }
  }
  return commonSubsequence[m][n];
};

console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"));

/* Write a JavaScript function to find the maximum of sum subarray

Input: maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
Expected Output: 6 (the subarray [4, -1, 2, 1] has the maximum sum) */

const maxSubarraySum = (nums) => {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Write a program that generates and prints the Fibonacci sequence up to a given number of terms

const fibonacciSequence = (n) => {
  if (n <= 0) {
    return [];
  }

  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
};

console.log(fibonacciSequence(6));

/* Write a function that takes an array of numbers as input and returns a new array with the numbers in reverse order */

const reverseOrder = (InputArray) => {
  return InputArray.reverse();
};
console.log(reverseOrder([1, 2, 3, 4, 5]));
