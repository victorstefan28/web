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
app.post('/contact', (req, res) =>
{
  console.log("posttt");
  console.log(req.body);
  path = __dirname + "/tickete.txt";
  fs.appendFile('tickete.txt', 'Nume: ' + req.body.name + ' Mesaj: ' + req.body.message + ' ' + "E-Mail: " + req.body.email + "\n", 'utf-8', (err) =>
  {
    if(err)
    {
      console.log(err);
      res.send("Eroare: Mesajul nu a fost trimis!")
    }
  })
  res.send("Mesajul a fost trimis!");

})

app.get('/despre', (req, res) => {
  res.sendFile(__dirname + "/despre.html")
})
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html")
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})