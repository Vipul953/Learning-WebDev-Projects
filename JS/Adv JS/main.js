// let a = 10
// function outer(){
//     let b = 20
//     function inner(){
//         let c = 30 
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

//Closer
// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner 
// }
// const fn = outer()
// fn()
// fn()


//Function Currying
// f(a,b,c) => f(a)(b)(c)

// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(2, 3, 4)) // Fixed: use actual numbers

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const carriedSum = curry(sum)
// console.log(carriedSum(2)(3)(4)) // Outputs: 9


//this keyword
//How to determine this keyword?
// 4 ways are
// 1. Implicit binding
// 2. Explicit binding
// 3. New binding
// 4. Default binding
// 1. Implicit binding
// const person = {
//     name: "Alice",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };
// person.greet(); // 'this' refers to 'person'

// // 2. Explicit binding
// function sayHello() {
//     console.log("Hello, " + this.name);
// }
// const user = { name: "Bob" };
// sayHello.call(user); // 'this' is explicitly set to 'user'

// // 3. New binding
// function User(name) {
//     this.name = name;
//     console.log("Created user: " + this.name);
// }
// const newUser = new User("Charlie"); // 'this' refers to the new object

// // 4. Default binding
// function showName() {
//     console.log(this.name);
// }
// globalThis.name = "Global"; // For browsers, use 'window.name'
// showName(); // 'this' refers to global object (globalThis or window)


// Class in js

// class Person{
//     constructor(fName, lName){
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName(){
//         return this.fName + ' ' + this.lName
//     }
// }

// const classP1 = new Person('Bruce', 'Wayne')
// console.log(classP1.sayMyName())

// class SuperHero extends Person{
//     constructor(fName, lName){
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime(){
//         console.log('Fighting Crime')
//     }
// }
// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.sayMyName())
// console.log(batman.fightCrime())


//Iterable and Iterators 

// Custom Iterable Example
// const myIterable = {
//     values: [1, 2, 3],
//     [Symbol.iterator]() {
//         let index = 0;
//         const values = this.values;
//         return {
//             next() {
//                 if (index < values.length) {
//                     return { value: values[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// // Using for...of with the iterable
// for (const value of myIterable) {
//     console.log(value); // 1, 2, 3
// }

// // Manual Iterator Example
// const arr = [10, 20, 30];
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next()); // { value: 10, done: false }
// console.log(iterator.next()); // { value: 20, done: false }
// console.log(iterator.next()); // { value: 30, done: false }
// console.log(iterator.next(  )); // { value: undefined, done: true }



// Generator Example
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Using for...of with generator
for (const num of numberGenerator()) {
    console.log(num); // 1, 2, 3
}