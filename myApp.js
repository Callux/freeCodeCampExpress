let express = require('express');
let app = express();

app.get("/", function(req, res) { 
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", function(req, res) {
    res.sendFile(absolutePath = __dirname + '/public/style.css');
});

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"});
});

console.log("Hello World");



































 module.exports = app;
