/* Write a JavaScript function to capitalize the first letter of each word in a sentence.

Input: capitalizeWords("the quick brown fox")
Expected Output: "The Quick Brown Fox" */

const capitalizeWords = (sentence) =>{
    let capital = sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    return capital;
}
console.log(capitalizeWords("the quick brown fox"));

/* . Write a JavaScript function to find the index of the first occurrence of an element in an array.

Input: indexOfElement([2, 4, 6, 4, 8], 4)
Expected Output: 1 */

const indexOfElement = (arr,element) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i;
        }
    }
    return 'Not Found';
}

console.log(indexOfElement([2, 4, 6, 4, 8], 8));

/* Write a JavaScript function to check if a given year is a leap year.

Input: isLeapYear(2024)
Expected Output: true */

const isLeapYear = (year) =>{
    if(year % 4 === 0){
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2020));
console.log(isLeapYear(2029));

/* Write a JavaScript function to calculate the sum of squares of all numbers from 1 to a given number.

Input: sumOfSquares(4)
Expected Output: 30 (1^2 + 2^2 + 3^2 + 4^2) */

const sumOfSquares = (n) => {
    let sum = 0;
    for(let i = 1; i<= n; i++){
        sum += Math.pow(i, 2);
        // sum += i * i;
    }
    return sum;
}
console.log(sumOfSquares(4));

/*  Write a JavaScript function to merge two sorted arrays into a single sorted array.

Input: mergeSortedArrays([1, 3, 5], [2, 4, 6])
Expected Output: [1, 2, 3, 4, 5, 6] */

const  mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0;
    let j = 0;
   
    while (i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) {
         mergedArray.push(arr1[i]);
         i++;
       } else {
         mergedArray.push(arr2[j]);
         j++;
       }
    }
   
    while (i < arr1.length) {
       mergedArray.push(arr1[i]);
       i++;
    }
   
    while (j < arr2.length) {
       mergedArray.push(arr2[j]);
       j++;
    }
   
    return mergedArray;
};
   
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));