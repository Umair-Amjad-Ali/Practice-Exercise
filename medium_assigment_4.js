/* Write a JavaScript function to implement insertion sort to sort an array of numbers.

Input: insertionSort([5, 3, 8, 1, 2])
Expected Output: [1, 2, 3, 5, 8] */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(insertionSort([5, 3, 8, 1, 2]));

/* Write a JavaScript function to find the number of vowels in a string (considering 'a', 'e', 'i', 'o', and 'u').

Input: countVowels("Hello, how are you?")
Expected Output: 7 */

const countVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Hello, how are you?"));

/* Write a JavaScript function to check if a given string is a valid email address.

Input: isValidEmail("john.doe@example.com")
Expected Output: true */

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validmail = emailRegex.test(email);
  return validmail;
};

console.log(isValidEmail("john.doe@example.com"));

/* Write a JavaScript function to find the second largest element in an array.

Input: findSecondLargest([3, 1, 7, 4, 2])
Expected Output: 4 */

// const findSecondLargest = (array) => {
//   let sortArray = array.sort((a, b) => a - b);
//   return sortArray[3];
// };

const findSecondLargest = (array) => {
  let sortArray = array.sort((a, b) => b - a);
  return sortArray[1];
};

console.log(findSecondLargest([3, 1, 7, 4, 2]));
console.log(findSecondLargest([1, 5, 6, 7, 8, 9, 4, 3]));

/* Write a JavaScript function to implement quicksort to sort an array of numbers.

Input: quickSort([5, 3, 8, 1, 2])
Expected Output: [1, 2, 3, 5, 8] */

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([5, 3, 8, 1, 2]));
