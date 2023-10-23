/* Write a JavaScript function to find the GCD (Greatest Common Divisor) of two numbers using Euclid's algorithm.

Input: findGCD(24, 36)
Expected Output: 12 */

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

console.log(findGCD(24, 36));

/* Write a JavaScript function to find the most frequent element in an array.

Input: mostFrequentElement([3, 1, 5, 3, 2, 1, 5, 5, 4])
Expected Output: 5 */

const mostFrequentElement = (array) => {
  let count = 0;
  let maxFrequent = array[0];

  for (let i = 0; i < array.length; i++) {
    let currentCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        currentCount++;
      }
    }
    if (currentCount > count) {
      count = currentCount;
      maxFrequent = array[i];
    }
  }
  return maxFrequent;
};

console.log(mostFrequentElement([3, 1, 5, 3, 2, 1, 5, 5, 4]));

/* Write a JavaScript function to reverse words in a sentence without reversing the characters of each word.

Input: reverseWords("Hello, how are you?")
Expected Output: "you? are how Hello, */

const reverseWords = (sentence) => {
  let words = sentence.split(" ");

  let reverseWords = words.reverse();

  let reverseSentense = reverseWords.join(" ");

  return reverseSentense;
};

console.log(reverseWords("Hello, how are you?"));
/* Write a JavaScript function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array.

Input: removeFalsyValues([0, 1, false, true, "", "hello", null, undefined, NaN])
Expected Output: [1, true, "hello"] */

const removeFalsyValues = (InputArray) => {
  return InputArray.filter(Boolean);
};

console.log(
  removeFalsyValues([0, 1, false, true, "", "hello", null, undefined, NaN])
);

/* Write a JavaScript function to find the median of an array of numbers.

Input: findMedian([3, 1, 7, 4, 2])
Expected Output: 3 */
const findMedian = (arr) => {
  let sortArray = arr.sort((a, b) => a - b);

  let median;

  // Odd Length
  if (sortArray.length % 2 !== 0) {
    let middleIndex = Math.floor(sortArray.length / 2);
    median = sortArray[middleIndex];
  } else {
    // even length
    let middleIndex = Math.floor(sortArray.length / 2);
    median = (sortArray[middleIndex] + sortArray[middleIndex - 1]) / 2;
  }
  return median;
};

console.log(findMedian([3, 1, 7, 4, 2]));

const AnotherFindMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const { length } = sortedArr;
  const middle = Math.floor(length / 2);
  // even length
  if (length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    //odd-length
    return sortedArr[middle];
  }
};
console.log(AnotherFindMedian([3, 1, 7, 4, 2]));
console.log(AnotherFindMedian([3, 1, 7, 4, 2, 5]));
