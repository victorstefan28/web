var express = require("express")
var app = express()
var fs = require("fs")
var path = require("path")

app.use(express.static(__dirname));
var port = 3000

//var bp = require("body-parser")

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.get('/produse', (req, res) => {
  res.sendFile(__dirname + "/produse.html")
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html")
})

app.get('/despre', (req, res) => {
  res.sendFile(__dirname + "/despre.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})