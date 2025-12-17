
// 1. Functions
// EASY 

// easy 1.01 - 1.
// 1.01

function greet(){
    console.log("hello")
}
function start(){
    greet()
}
// start()

// 1.02
function add(a,b){
    return a+b
}
function showSum(){
    const result = add(3,5)
    // console.log(result)
    return result
}
// console.log(showSum())

// 1.03
function step1(){
    return "Running step 1"
}
function step2(){
    return "Running step 2"
}
function runAll(){
    console.log(step1());
    console.log(step2());  
}
// runAll()


// 1.04
function getName(){
    const name = "Vipul"
    return name
}
function whichUser(){
    const name = getName()
    console.log("Kekkai genkai user: " + name)
}
// whichUser()

// 1.05
function printMessage(){
    console.log("This is a printed messsage")
}
function executor(fn){
    fn()
}
// executor(printMessage)

// 1.06













// MEDIUM .5 - 

// 1.06
const operationDouble = {
    double(n){
        return n*2
    },

    process(n){
        const result = this.double(n)
        return result
    }
}
// console.log(operationDouble.process(5))


// 1.07
async function fetchUser(){
    return {name: "Vipul", age: 22}
}
async function loadAndShow(){
    const user = await fetchUser()
    console.log("Loaded user: ", user)
}
// loadAndShow()


// 1.08
// sort() converts items to strings and sorts alphabetically.
// Use a compare function for numeric sorting.
// Example: [5, 20, 3].sort((a, b) => a - b) → [3, 5, 20]

const items = [
  { id: 1, name: "Laptop", price: 900, rating: 4.5 },
  { id: 2, name: "Phone", price: 600, rating: 4.8 },
  { id: 3, name: "Keyboard", price: 50, rating: 4.0 },
  { id: 4, name: "Mouse", price: 20, rating: 4.2 },
  { id: 5, name: "Monitor", price: 250, rating: 4.1 },
]

function applySort(arr, sortInfo){
    return [...items].sort(compareFn(sortInfo.feild, sortInfo.order))
}

function compareFn(feild, order = "asc"){
    return function(a,b){
        const x = a[feild]
        const y = b[feild]

        if(x < y) return order === "asc"? -1: 1
        if(x > y) return order === "asc"? 1: -1
        return 0
    }
}
// console.log(applySort(items, {feild: "price", order: "asc"}))
// console.log(applySort(items, {feild: "rating", order: "asc"}))
// console.log(applySort(items, { feild: "price", order: "desc" }));
// console.log(applySort(items, { feild: "rating", order: "desc" }));


// 1.09
const items1 = [
  { title: "B", price: 300 },
  { title: "A", price: 200 },
]
function byName(n1, n2){
    return n1.title.localeCompare(n2.title)
}
function byPrice(p1, p2){
    return p1.price - p2.price
}

function sortItems1(items1, sortByFunc){
    return items1.sort(sortByFunc)

}
// console.log(sortItems1(items1, byName))
// console.log(sortItems1(items1, byPrice))

// 1.10
function applyTax(initialAmt) {
    return initialAmt - initialAmt*0.18
}
// 10% discount 
function applyDiscount(taxedAmt) {
    return taxedAmt - taxedAmt*0.1
}
function finalPrice(initialAmt){
    const taxedAmt = applyTax(initialAmt)
    return applyDiscount(taxedAmt)
}
// console.log(finalPrice(500))

// 1.11
function multiplier(n){
    return function(x){
        return x * n
    }
}
function double(x){
    return multiplier(2)(x)
}
// console.log(double(5))



