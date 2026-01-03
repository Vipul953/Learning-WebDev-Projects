// Easy Examples

// 1. Check if array has any even number
const arr1 = [1, 3, 5, 7, 9];
console.log(arr1.some((x) => x % 2 === 0)); // false

// 2. Check if array has any string longer than 3 characters
const arr2 = ["a", "ab", "abc", "abcd"];
console.log(arr2.some((s) => s.length > 3)); // true

// Medium Examples

// 3. Check if any object has a property value greater than 10
const arr3 = [{ val: 5 }, { val: 15 }, { val: 8 }];
console.log(arr3.some((obj) => obj.val > 10)); // true

// 4. Check if any number is divisible by both 3 and 5
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
console.log(arr4.some((x) => x % 3 === 0 && x % 5 === 0)); // true

// Hard Examples

// 5. Check if any subarray contains a number greater than 100
const arr5 = [
  [1, 2],
  [3, 4],
  [5, 150],
  [6, 7],
];
console.log(arr5.some((sub) => sub.some((x) => x > 100))); // true

// 6. Check if any string in array is a palindrome
const arr6 = ["hello", "world", "radar", "level"];
console.log(arr6.some((s) => s === s.split("").reverse().join(""))); // true
