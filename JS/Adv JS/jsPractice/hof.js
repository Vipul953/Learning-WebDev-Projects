// Higher Order functions 

// A Higher-Order Function is a function that either:
// 1. Takes another function as an argument
// → Example: map(callback), filter(callback)
// 2. Returns another function


// Easy 

// 1.01 (map, passes the function)
const nums = [2,6,3]
const doubled = nums.map(n => n*2)
// console.log(doubled)

// 1.02
function sayHello(){
    return function(name){
        console.log("Hello", name)
    }
}
const greetHello = sayHello()
// greetHello("Vipul")



// MEDIUM 

// 2.01
const ages = [12, 18, 22, 30, 15];
const adults = ages.filter(age => age >= 18);
// console.log(adults)

// 2.02
function operate(a, b, fn){
    return fn(a,b)
}
const add = (x,y) => x+y
const sub = (x,y) => x-y
const mul = (x,y) => x*y

// console.log(operate(3, 4, add))
// console.log(operate(3, 4, sub))
// console.log(operate(3, 4, mul))


// HARD 

// 3.01 (debounce: delay the function when called mutltiple times)
function debounce(fn, delay){
    let timer
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }

}
function onResize(){
    console.log("Resized!")
}

const debounceResize = debounce(onResize, 1000)
// calling multiple times:
// debounceResize()
// debounceResize()
// debounceResize()
// Only runs once after 1000ms pause


// 3.02 ()

function createEmitter() {
  const listeners = {};

  return {
    on(event, handler) {
      listeners[event] = listeners[event] || [];
      listeners[event].push(handler);
      return () => {
        listeners[event] = listeners[event].filter((h) => h !== handler);
      };
    },
    emit(event, value) {
      (listeners[event] || []).forEach((h) => h(value));
    },
  };
}

const emitter = createEmitter();
const unsub = emitter.on("login", (user) => console.log("USER LOGGED:", user));
emitter.emit("login", "Vipul");
emitter.emit("login", "rohan");
unsub();


