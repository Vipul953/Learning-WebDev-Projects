// Reduce - reduce() takes an array and reduces it to a single value (number, string, object, array… anything). It processes the array one item at a time using a function you provide.

// array.reduce((accumulator, currentValue) => {
//   return newValue;
// }, initialValue);

// accumulator → stores the running result
// currentValue → the item currently being processed
// initialValue → starting value for the accumulator

// 1 : Accumulator as NUMBER
const nums1 = [2,3,8,4,5]
const sort1 = nums1.reduce((acc, n) => {
    return acc + n
}, 0)
// console.log(sort1)

const nums4 = [1, 2, 3, 4, 5];
const sum4 = nums4.reduce((acc, n) => {
  return acc + n;
}, 0)
const product4 = nums4.reduce((acc, n) => {
  return acc * n;
}, 1)
// console.log("Sum:", sum4)
// console.log("product:", product4)

// 2 : Accumulator as ARRAY
const nums2 = [0, 2, 3, 8, 4, 5]
const even2 = nums2.reduce((acc, n) => {
    if (n % 2 === 0) acc.push(n)
    return acc
}, [])
const double2 = nums2.reduce((acc, n) => {
    acc.push(n * 2)
    return acc
},[])
// console.log(even2)

// 3 : Accumulator as OBJECT
const letters3 = ["a", "b", "a"]
const stats3 = letters3.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1
    return acc
}, {})
// console.log(stats)




