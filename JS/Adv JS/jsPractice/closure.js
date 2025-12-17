// Closure 

// A closure happens when:
// A function is created inside another function, and
// The inner function remembers the variables of the outer function
// even after the outer function finishes running.

// Think of it like:
// 👉 A child function carrying a backpack full of its parent’s variables.
// Even if the parent function is gone, the child still has the backpack.

// Easy 1.01

// 1.01
function counter(){
    let count = 0

    return function(){
        count++
        console.log(count)
    }
}
const c = counter()
// c()
// c()
// c()

// 1.02
function multiplier(n){
    return function(x){
        console.log(n * x)
    }
}
const double = multiplier(2)
const triple = multiplier(3)
// double(5)
// triple(5)


// Medium 2.01

// 2.01
function bankAccount(){
    let balance = 1000

    return{
        deposit(amount){
            balance += amount
            console.log("balance: " ,balance)
        },
        withdraw(amount){
            balance -= amount
            console.log("balance: " ,balance)
        }
    }
}
const acc = bankAccount()
// acc.deposit(300)
// acc.withdraw(200)


// 2.02
function createButtons(){
    let actions = []

    for(let i=0; i<=3; i++){
        actions.push(function(){
            console.log("Button: " + i)
        })
    }
    return actions
}
const btns = createButtons()
// btns[0]()
// btns[1]()
// btns[2]()

// 2.03
function power(p){
    return function(x){
        console.log(x ** p)
    }
}

const square = power(2)
const cube = power(3)
// square(3)
// cube(4)

// 2.04 (counter with steps)
function createCounter(steps = 1){
    let count = 0 

    return function(){
        count += steps
        console.log("count: ", count)
        return count 
    }
}

const c1 = createCounter(2)
const c2 = createCounter(5)
// c1()
// c1()
// c2()
// c2()


// 2.05 (Memoization Basics)
function memoize(){
    let cache = {}
    
    return function(n){
        if(cache[n]){
            console.log("From Cache: ", cache)
            return cache[n]
        }
        const result = n * 10
        cache[n] = result
        console.log("Calculated: ", result)
        return result
    }
}
const calc = memoize()
// calc(2)
// calc(5)
// calc(2)


// 2.06 (Private Variables in Objects)
function user(){
    let name = "Secret name"

    return {
        setName(newName){
            name = newName
        },
        getName(){
            return name
        }
    }
}
const u = user()
// console.log(u.getName())
// u.setName("Vipul") 
// console.log(u.getName())


// 2.07 (Timer Manager: start/stop)
function createTimer(){
    let seconds = 0 
    let intervalId= null

    return {
        start() {
            intervalId = setInterval(() => {
                seconds++
                console.log("Seoconds: ", seconds)
            }, 1000)
        },
        stop(){
            clearInterval(intervalId)
            console.log("Stopped at: ", seconds)
        }
    }
}
const t = createTimer()
// t.start()
// setTimeout(() => t.stop(), 3500)


// 2.08 
function greaterThan(n){
    return function(x){
        return x > n
    }
}
const isAbove10 = greaterThan(10)
// console.log(isAbove10(7))
// console.log(isAbove10(17))


// 2.09 (Once Function)
function runOnce(fn){
    let called = false

    return function(){
       if(!called){
            called = true
            return fn()
       }
       console.log("Already executted")
    }
}

const init = runOnce(() => console.log("Setup Done"))
// init()
// init()


// 2.10 
function styleManager(element){
    let styles = {}

    return {
        set(prop, value){
            styles[prop] = value
            element.style[prop] = value
        },
        show(){
            console.log("Current styles", styles)
        }
    }
}
const box = document.createElement("div") 
document.body.appendChild(box)

const styler = styleManager(box)
// styler.set("background", "black")
// styler.set("width", "100px")
// styler.show()

