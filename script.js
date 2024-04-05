// 1. Given two values, return the first one if it is falsy, otherwise, return the second one:

// function falsyOrTruthy(elem1, elem2) {
//   return (!elem1) ? elem1 : elem2;
// }

// console.log(falsyOrTruthy(0, 5));


// -----------------------------------------------------------------


// 2. Given an array, return its length:

// function arrLength(arr) {
//   return arr.length;
// }

// console.log(arrLength([1, 6, 3, 5]));


// -----------------------------------------------------------------


// 3. Given an array, return the last element:

// function arrLength(arr) {
//   return arr[arr.length -1];
// }

// console.log(arrLength([1, 6, 3, 5, 7]));


// -----------------------------------------------------------------


// 4. Given an array, return the sum of every element:

// function arrSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; ++i) {
//     // - This is how you loop through every element in an array
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(arrSum([5, 3, 8]));


// -----------------------------------------------------------------


// 5. Given a number, add up all the numbers from one to the number that is given. (E.g. An input of 4 will give you 1 + 2 + 3 + 4 which equals 10):

// function progressiveSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; ++i) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(progressiveSum(4));


// -----------------------------------------------------------------


// 6. Given a number in seconds, return this number in mm:ss format:

// function calcTime(seconds) {
//   let timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;

//   if (timerMinutes.toString().length ===1) {
//     timerMinutes = '0' + timerMinutes
//   }

//   return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(70));


// -----------------------------------------------------------------


// 7. Given an array of numbers, return the largest number of that array:

// function getMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getMax([3, 6, 2]));


// -----------------------------------------------------------------


// 8. Given a string, return the reversed string

// function reverseString(str) {
//   let reversedString = '';
//   for (let i = 0; i < str.length; ++i) {
//     // - This^ is how you loop through every character in a string
//     reversedString = str[i] + reversedString;
//   }
//   return reversedString
// }

// console.log(reverseString('abc'));

      // OR -----------------------------------

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
      
// console.log(reverseString('abc'));


// -----------------------------------------------------------------


// 9. Given an array of elements, return the same length array filled with 0's:

// function convertToZeros(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; ++i) {
//     newArr[i] = 0
//   }
//   return newArr;
// }

// console.log(convertToZeros([5, 10, 6, 2]));

      // OR ---------------------------------

// function convertToZeros(arr) {
//   return arr.map(elem => 0);
// }

// console.log(convertToZeros([1, 2, 3, 4, 5]));


// -----------------------------------------------------------------


// 10. Given an array of fruits, if it is an apple, remove it from the array:

// function removeApples(arr) {
//   let noApples = []
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] !== 'Apple') {
//       noApples.push(arr[i]);
//     }
//   }
//   return noApples;
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

      // OR ---------------------------------

// function removeApples(arr) {
//   return arr.filter(elem => elem !== 'Apple');
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));


// -----------------------------------------------------------------


// 11. Given an array of values, filter out all the falsy values and only return the truthy values:

// function filterOutFalsy(arr) {
//   return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(['Banana', [], 0, false, 'Apple', NaN]))


// -----------------------------------------------------------------


// 12. Given an array of truthy and falsy values, return the same array of elements into its boolean value:

// function convertToBoolean(arr) {
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, [], 'David', false]))