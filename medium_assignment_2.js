/* Write a JavaScript function to truncate a string up to a given length and add "..." if it exceeds.

Input: truncateString("Hello, how are you?", 10)
Expected Output: "Hello, how..." */

const truncateString = (str, maxLength) => {
    if(str.length <= maxLength){
        return str;
    }

    const truncateStr = str.slice(0, maxLength);
    return truncateStr + '...';
}

console.log(truncateString("Hello, how are you?", 10));
console.log(truncateString("Hello, how are you?", 15));

/* Write a JavaScript function to sort an array of objects by a specific property.

Input: sortObjects([{name: "John", age: 25}, {name: "Jane", age: 30}], "age")
Expected Output: [{name: "John", age: 25}, {name: "Jane", age: 30}] */

const sortObjects = (array,prop) => {
    /* const sortArray = array.sort((a,b) => {
        if(a[prop] < b[prop]){
            return -1;
        }
        if(a[prop] > b[prop]){
            return 1;
        }
        return 0;
    });
    return sortArray; */

    return array.sort((a,b) =>(a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0)));
}

console.log(sortObjects([{name: "Jane", age: 30}, {name: "John", age: 25}], "age"));

/* Write a JavaScript function to generate a random password of a given length.

Input: generatePassword(8)
Expected Output: "a1H#7zB@" */

const generatePassword = (length) =>{
    let resultPassword  = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|?/><';
    for(let i = 0; i < length; i++){
        const randomNumber = Math.floor(Math.random() * characters.length);
        resultPassword += characters[randomNumber];
    }
    return resultPassword;
}
console.log(generatePassword(8));   

/* Write a JavaScript function to find the sum of digits in a number.

Input: sumDigits(12345)
Expected Output: 15 */

const sumDigits = (digits) => {
    let sum = 0;
    let numStr = digits.toString();
     for(let i = 0; i <numStr.length; i++){
        sum +=  +digits[i];
     }
     return sum;
}
console.log(sumDigits("12345"));

/* Write a JavaScript function to find the longest word in a sentence.

Input: longestWord("The quick brown fox jumps over the lazy dog")
Expected Output: "jumps" */

const longestWord = (str) => {
    let splitWords = str.split(' ');
    let longestWord = '';
    for(let word of splitWords ){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));

