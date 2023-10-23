/* Write a JavaScript function to calculate the factorial of a number using recursion.

Input: factorialRecursive(5)
Expected Output: 120 */

const factorialRecursive = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(5));

/* Write a JavaScript function to implement the Fibonacci sequence up to a given number of terms.

Input: fibonacciSequence(6)
Expected Output: [0, 1, 1, 2, 3, 5] */

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

/* Write a JavaScript function to find the longest common prefix in an array of strings.

Input: longestCommonPrefix(["apple", "app", "april"])
Expected Output: "ap" */

const longestCommonPrefix = (str) => {
  if (str.length === 0) {
    return "";
  }
  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0 && prefix.length > 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["apple", "app", "april"]));

/* Write a JavaScript function to convert a string to title case (the first letter of each word capitalized).

Input: toTitleCase("the quick brown fox")
Expected Output: "The Quick Brown Fox" */

const toTitleCase = (sentence) => {
  let capital = sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return capital;
};

console.log(toTitleCase("the quick brown fox"));
/* Write a JavaScript function to find the first non-repeating character in a string.

Input: firstNonRepeatingCharacter("abacddbe")
Expected Output: "c" */

const firstNonRepeatingCharacter = (string) => {
  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    charCount[string[i]] = (charCount[string[i]] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (charCount[string[i]] === 1) {
      return string[i];
    }
  }

  return null;
};

console.log(firstNonRepeatingCharacter("abacddbe"));
