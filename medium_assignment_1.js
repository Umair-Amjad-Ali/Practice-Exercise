/* Write a JavaScript function to calculate the area of a circle given its radius.

Input: circleArea(5)
Expected Output: 78.54 */

const circleArea = (r) =>{
    // return (3.14 * (r * r));
    const area = Math.PI * Math.pow(r,2);
    return area;
}
console.log(circleArea(5));

/* Write a JavaScript function to find the second smallest element in an array.

Input: findSecondSmallest([3, 1, 7, 4, 2])
Expected Output: 2 */

const findSecondSmallest = (inputArray) =>{
     const sortArray = inputArray.sort((a,b) => {
        return a - b;
      });
    return sortArray[1];
}

console.log(findSecondSmallest([3, 1, 7, 4, 2]));

/* Write a JavaScript function to check if a string is an anagram of another string.

Input: isAnagram("listen", "silent")
Expected Output: true */

const isAnagram = (str1, str2) =>{
    if(str1.length !== str2.length){
        return false;
    }

    const sortStr1 = str1.split('').sort().join('');
    const sortStr2 = str2.split('').sort().join('');

    const anagramStr = sortStr1 === sortStr2;
    return anagramStr;
}   
console.log(isAnagram("listen", "silent"));
console.log(isAnagram('wah', 'haw'));
console.log(isAnagram('hello', 'world'));

/* Write a JavaScript function to find the intersection of two arrays.

Input: Input: intersection([1, 2, 3], [2, 3, 4])
Expected Output: [2, 3] */

const intersection = (arr1, arr2) =>{
    let resultArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            resultArr.push(arr1[i]);
        }
    }
    return resultArr;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));

/* Write a JavaScript function to find the average of an array of numbers.

Input: findAverage([3, 5, 7, 10])
Expected Output: 6.25 */

const findAverage = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}

console.log(findAverage([3, 5, 7, 10]));