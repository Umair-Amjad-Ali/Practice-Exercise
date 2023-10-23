// Write a JavaScript program to display "Hello, World!" on the console.

// Expected Output: Hello, World!

console.log('Hello, World!');

/* 
 Write a JavaScript function to add two numbers.

   Input: add(5, 7)
   Expected Output: 12

*/

const addTwoNumbers = (a,b) =>{
    return a + b;
}

console.log(addTwoNumbers(5,7));

/* Write a JavaScript function to check if a number is even or odd.

Input: isEven(6)
Expected Output: true */

const isEvenOrOdd  = (inputNumber) =>{
    // if(inputNumber % 2 === 0){
    //     return 'even'
    // }
    // return 'odd';

    return inputNumber % 2 === 0 ? 'even' : 'odd';
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

/* Write a JavaScript function to find the largest number in an array.

Input: findLargest([3, 1, 7, 4])
Expected Output: 7 */

const findLargestNumber = (inputArray) => {
    let largestNumber = 0;
    for(let i = 0; i < inputArray.length; i++){
        // if(largestNumber <= inputArray[i]){
        //     largestNumber = inputArray[i];
        // }
        if(inputArray[i] > largestNumber){
            largestNumber = inputArray[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumber([3,1,7,4]));

/* Write a JavaScript function to reverse a string.

Input: reverseString("hello")
Expected Output: "olleh" */

const reverseString = (inputStr) =>{
    let newStr = inputStr.split('').reverse().join('');
    return newStr 
}
 console.log(reverseString('hello'));