/* Write a JavaScript function to find the sum of all numbers divisible by 3 or up to a given number.

Input: sumDivisibleBy3or5(10)
Expected Output: 33 (3 + 5 + 6 + 9 + 10) */

const sumDivisibleBy3or5 = (n) => {
    let totalSum = 0;
    for(let i = 1; i<= n; i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            totalSum += i;
        }
    }
    return totalSum;
}

console.log(sumDivisibleBy3or5(10));

/* Write a JavaScript function to convert Celsius to Fahrenheit.

Input: celsiusToFahrenheit(25)
Expected Output: 77 */

const celsiusToFahrenheit = (c) => {
    let fahrenheit = c * 9 / 5 + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(25));

/* Write a JavaScript function to check if a given string contains a specific substring.

Input: containsSubstring("Hello, World!", "World")
Expected Output: true */

const containsSubstring = (InputStr, str ) => {
    if(InputStr.indexOf(str) !== -1){
        return true;
    }
    return false;
}

console.log(containsSubstring('hello, world!', 'world'));
console.log(containsSubstring('hello, world!', 'hello'));

/* Write a JavaScript function to find the area of a triangle given its base and height.

Input: triangleArea(6, 8)
Expected Output: 24 */

const triangleArea = (base, height) =>{
    const formula = (base * height) / 2;
    return formula;
}

console.log(triangleArea(6,8));

/* Write a JavaScript function to generate a random number between a given range.

Input: randomInRange(1, 10)
Expected Output: a random number between 1 and 10 (inclusive) */

const randomInRange = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
console.log(randomInRange(1, 10));

