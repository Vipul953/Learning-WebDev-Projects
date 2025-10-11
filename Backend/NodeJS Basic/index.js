
// import (using commonJS)

// const generateRandomNumber = require("./utils")
// console.log(`Random Number: ${generateRandomNumber()}`)

// import mutiple func (using commonJS) 

// const { generateRandomNumber, greet} = require("./utils")
// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Greetings: ${greet()}`)

// Import (using ES module)
import getPosts, { getPostsLength } from "./postController.js"
console.log(getPosts())
console.log(`Post Length: ${getPostsLength()}`)

