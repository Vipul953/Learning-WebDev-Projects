// Create folder 
// npm init -y
// npm i express
// Create express instance 
// Porvide Port 
// Basic Route 

import express from "express"
const app = express()


// 1 callback 
app.get("/", (req, res) => {
    res.send("Welcome to express.js")
})
app.get("/about", (req,res) => {
    res.send("<h1>About</h1>")
})


// 2 callbacks
app.get(
    "/double-cb", 
    (req,res,next) => {
        console.log("First callback")
        next()
    }, 
    (req,res) => {
        res.send("Second callback")
    }
)

app.listen(8000, () => {
    console.log("Server Up!")
}) 

