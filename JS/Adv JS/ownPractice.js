// let user = {
//     name: 'Vipul',
//     age: 23,
//     greet: function (){
//         console.log('Hello ' + this.name)
//     },
//     greet2(){
//         console.log('hola ' + this.name)
//     },
//     greet3: () => {
//         console.log('Mai ' + this.name)
//     }
// };


// // Incorrect Way 
// // function userWant() = {
// //     console.log('I want jaggery powder as a replacement for refined sugar.')
// // };


// // Correct way deaclare functions

// // 1. Function Declaration
// function userWant(){
//     console.log('Jaggery powder')
// }

// // 2. Function Expression
// const userWant2 = function(){
//     console.log('Honey')
// }

// // Arrow Function
// const userWant3 = () => {
//     console.log('Chocolate Powder')
// }

// userWant()
// userWant2()
// userWant3()
// user.greet()
// user.greet2() 
// user.greet3() //undefined (In arrow function, scope of this is surrounding function as they dont have their own scope) here surrounding scope is global scope 


// const sayGreet = user.greet
// sayGreet()   // Hello Undefined... (to fix it, use bind which permanently sets 'this' to person object)

// const sayGreet2 = user.greet.bind(user)
// sayGreet2() // Hello Vipul


//-----------------------------------------------

//Promises - object that represents the eventual result of an asynchronous operation.

// const promise = new Promise((resolve, reject) => {
//     const allWentWell = true

//     if (allWentWell){
//         console.log('All is well')
//     }
//     else{
//         console.log("Not Well")
//     }
// })
// console.log(promise)


// const promise2 = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)

//     setTimeout(() => {
//         if(randomNumber < 4){
//             resolve('Well Done!')
//         } else {
//             reject('Oops!')
//         } 
//     }, 2000);
// })

// console.log(promise2)

// // How to consume promise

// promise2.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(error)
// })

//---------------------------------------------------------------

// Promise.all() 

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise One Resolved ')
//     }, 2000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise Two Rejected ')   // resolve('Promise  Two Resolved') and run now
//     }, 1500);
// });

// Promise.all([promiseOne, promiseTwo])
// .then((data) => console.log(data[0], data[1]))
// .catch((error) => console.log(error))

//-----------------------------------------------------


// Async/await 

// const preHeatOven = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const preHeatOven = true

//             if (preHeatOven) {
//                 resolve('Preheat over 180deg')
//             } else {
//                 reject('Failed Step One')
//             }
//         }, 1000)
//     })
// };

// const addSugarAndChocoChips = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const addSugar = true

//             if(addSugar){
//                 resolve('Add Sugar and ChocoChips')
//             } else {
//                 reject('Failed Step two')
//             }
//         }, 1000)
//     })
// };

// const addFlourCocoaAndSalt = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             const addFlour = true

//             if(addFlour){
//                 resolve('Add Flour, Cocoa and Salt')
//             } else{
//                 reject("Failed Step Three")
//             }
//         }, 1000)
//     })
// };

// const bakeMixture = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mixBake = true

//             if(mixBake){
//                 resolve('Bake the Mixture')
//             } else{
//                 reject("Failed Step Four")
//             }
//         }, 1000)
//     })
// }

// const bakeChocolateBrownies = async () => {
//     const taskOne = await preHeatOven();
//     console.log(taskOne)

//     const taskTwo = await addSugarAndChocoChips();
//     console.log(taskTwo)

//     const taskThree = await addFlourCocoaAndSalt();
//     console.log(taskThree)

//     const taskFour = await bakeMixture();
//     console.log(taskFour)

//     setTimeout(() => {
//         console.log("All Set! Enjoy your Brownie")
//     }, 1000)
// }

// bakeChocolateBrownies();



//--------------------------------------------------

// Fetch API

fetch('https://dummyjson.com/products/', {})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))