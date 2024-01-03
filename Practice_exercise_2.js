// console.log("hello");

// Write a program that takes two numbers as input and outputs their sum, difference, product, and quotient.

const calculator = (a, b) => {
  let sum = `The Sum of two Numbers are : ${a + b}`;
  let difference = `The diffrence of two Numbers are : ${a - b}`;
  let product = `The Product of two Numbers are : ${a * b}`;
  let quotient = `The Quotient of two numbers are : ${a / b}`;
  return [sum, difference, product, quotient];
};

// console.log(calculator(5, 6));

// Write a program that takes a number as input and prints whether it is even or odd.

const evenOrOdd = (number) => {
  if (number === 0) return "Not Even Nor Odd";
  if (number % 2 === 0) return "The NUmber is Even";
  else return "The Number is Odd";
};

console.log(evenOrOdd(0));
console.log(evenOrOdd(3));
console.log(evenOrOdd(12));
console.log(evenOrOdd(13));

// Write a program that takes a string as input and prints the reverse of the string.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));

// Write a program that generates and prints the Fibonacci sequence up to a given number of terms.

const Fibonacci = (number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  let sequence = [];

  for (let i = 1; i <= number; i++) {
    sequence.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return sequence;
};

console.log(Fibonacci(5));

// Write a program that takes an array of numbers as input and outputs the largest and smallest numbers in the array.
const findMinMax = (numbers) => {
  let minMax = { min: numbers[0], max: numbers[0] };

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minMax.min) {
      minMax.min = numbers[i];
    }
    if (numbers[i] > minMax.max) {
      minMax.max = numbers[i];
    }
  }

  return minMax;
};

// This is an example usage of the findMinMax function.
let numbers = [4, 7, 2, 8, 1, 5];
let result = findMinMax(numbers);
console.log("Smallest number: " + result.min);
console.log("Largest number: " + result.max);
