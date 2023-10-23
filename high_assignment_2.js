/* Write a JavaScript function to find the longest increasing subsequence in an array of numbers.

Input: longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])
Expected Output: [10, 22, 33, 50, 60, 80] */

const longestIncreasingSubsequence = (inptArr) => {
  let result = [];
  let currentSequence = [inptArr[0]];

  for (let i = 1; i < inptArr.length; i++) {
    if (inptArr[i] > currentSequence[currentSequence.length - 1]) {
      currentSequence.push(inptArr[i]);
    } else {
      if (currentSequence.length > result.length) {
        result = [...currentSequence];
      }
      currentSequence = [inptArr[i]];
    }
  }

  if (currentSequence.length > result.length) {
    result = [...currentSequence];
  }

  return result;
};

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));

/* Write a JavaScript function to find all prime numbers up to a given number.

Input: sieveOfEratosthenes(30)
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] */

const sieveOfEratosthenes = (n) => {
  let primes = [];
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
};

console.log(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

/* Write a JavaScript function to shuffle an array randomly.

Input: fisherYatesShuffle([1, 2, 3, 4, 5, 6])
Expected Output: [3, 2, 6, 1, 4, 5] (randomly shuffled) */

const fisherYatesShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log(fisherYatesShuffle([1, 2, 3, 4, 5, 6]));

/* Write a JavaScript function to check if a given string is a palindrome without considering spaces and punctuation.

Input: isPalindromeIgnoreNonAlphanumeric("A man, a plan, a canal, Panama!")
Expected Output: true */

const isPalindromeIgnoreNonAlphanumeric = (str) => {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
};
console.log(
  isPalindromeIgnoreNonAlphanumeric("A man, a plan, a canal, Panama!")
);

/* Write a JavaScript function to find maximum common element in both arraya.

Input: maximumCommonElement([3, 2, 4, 5], [5, 3, 6, 4])
Expected Output: Maximum values: [4, 5] */
const maximumCommonElement = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value));
};

console.log(maximumCommonElement([3, 2, 4, 5], [5, 3, 6, 4]));
