// 1
function greet(name){
    const sayGreet = "Hello " + name 
    return console.log(sayGreet);
}
// greet("Vipul")

// 2
function info(name, age){
    const sayName = "My name is: " + name
    const sayAge = `I am ${age} years old`
    return {
        name: console.log(sayName),
        age: console.log(sayAge)
    }
}
// info("Vipul", 22)

// 3
function add(a, b){
    return a + b
}
// console.log(add(2,3))

// 4
function randomNum(){
    return Math.floor(Math.random() * 100);
}
// console.log(randomNum())

// 5
function isAdult(age){
    return age >= 18
}
// console.log(isAdult(65))

// 6
function square(num){
    return num * num
}
// console.log(square(8))


// 7 
function printNum(num){
    for( let i=0; i<= num; i++){
        console.log(i)
    }
}
// printNum(8)

// 8
function stopTarget(num, target){
    for( let i=0; i<=num; i++){
        console.log(i)
        if(i===target){
            return "Target Achieved: " + target
        }
    }
}
// console.log(stopTarget(6, 3))

// 9
const arr = [12,4,5,6]
function sortArr(){
    arr.sort((a,b) => a - b)
    return arr
}
// console.log(sortArr())


// 10 


