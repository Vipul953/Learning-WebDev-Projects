// map: map() takes an array, runs a function on each item, and returns a new array with the transformed values.

// 1
const num1 = [0,3,5,6]
const doubled = num1.map(n => n * 2)
// console.log(doubled)

// 2
const num2 = [9,4,6,7]
const label = num2.map(n => "item" + n)
// console.log(label)

// 3
const user3 = [{name: "Vipul", age:22}, {name: "Viren", age: 24}]
const name3 = user3.map(u => u.name)
// console.log(name3)

// 4
const user4 = [{name: "A", age: 23}]
const summary4 = user4.map((u) => ({
  label: `${u.name} - ${u.age}`,
  isAdult: u.age >= 18,
}));
// console.log(summary4)

// 5
const arr5 = ["a", "b", "c"];
const result5 = arr5.map((val, idx) => `${idx} : ${val}`)
// console.log(result5)

// 6
const num6 = [1,2,3,4,5,6]
const evenOrOdd = num6.map(n => (n % 2 === 0 ? "even":"odd"))
// console.log(evenOrOdd)

const evenArr6 = []
const oddArr6 = []
const evenOddArr = num6.map((n) => (n % 2 === 0 ? evenArr6.push(n) : oddArr6.push(n)));
// console.log({evenArr6, oddArr6})

// 7
const users = [
  { name: "Vipul", age: 25 },
  { name: "John", age: 30 },
  { name: "Sara", age: 28 },
]
const getName = users.map(u => u.name)
console.log(getName)


// 8
const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Phone", price: 600 },
]
const newFormat = products.map(p => ({
    item: p.name,
    cost: p.price
}))
console.log(newFormat)
