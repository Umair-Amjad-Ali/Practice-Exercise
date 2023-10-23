/* Write a JavaScript function to count the occurrences of a specific element in an array.

Input: countOccurrences([1, 2, 2, 3, 2], 2)
Expected Output: 3 */

const countOccurrences = (InputArray, element) =>{
    let count = 0;
    for(let i = 0; i < InputArray.length; i++ ){
        if(InputArray[i] === element){
            count++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2));

/* Write a JavaScript function to check if a string is a palindrome.

Input: isPalindrome("level")
Expected Output: true */

const isPalindrome = (inputStr) =>{
    let checkPal = inputStr.split('').reverse().join('');
    if(checkPal === inputStr ){
        return true;
    }
    return false;
}

console.log(isPalindrome("level"));
console.log(isPalindrome('rotator'));
console.log(isPalindrome('helo'));

/* Write a JavaScript function to remove duplicate elements from an array.

Input: removeDuplicates([1, 2, 2, 3, 1])
Expected Output: [1, 2, 3] */

const removeDuplicates = (InputArray) =>{
    let uniqueArray = [...new Set(InputArray)];
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));

const removeDuplications = (InputArray) =>{
    let uniqueArray = [];
    for(let i = 0; i< InputArray.length; i++ ){
        if(!uniqueArray.includes(InputArray[i])){
            uniqueArray.push(InputArray[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplications([1, 2, 2, 3, 1]));

/* Write a JavaScript function to find the factorial of a number.

Input: factorial(5)
Expected Output: 120 */

const factorial = (number) =>{
    if(number === 0){
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(factorial(5));

/* Write a JavaScript function to check if a number is prime.

Input: isPrime(7)
Expected Output: true */

const isPrime = (number) =>{
    if(number <= 1){
       return false;
    }
    if(number === 2){
        return true;
    }
    if(number % 2 === 0){
        return false;
    }
    for(let i = 3; i < Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}     
console.log(isPrime(7));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(9));