//Iana Bosenko

var express = require('express')

const SERVER_PORT = 8089
var app = express()

//http://localhost:8089/hello
app.get("/hello",(req,res) => {
    res.send("Hello Express JS")
})

//http://localhost:8089/user?fname=ianaa&lname=bosenko
app.get("/user",(req,res) => {
    res.json(req.query)
})

//http://localhost:8089/user/firstname/lastname
app.post("/user/:firstname/:lastname",(req,res) => {
    res.json(req.params)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})