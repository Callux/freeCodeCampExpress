let express = require('express');
let app = express();

app.get("/", function(req, res) { 
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", function(req, res) {
    res.sendFile(absolutePath = __dirname + '/public/style.css');
});

console.log("Hello World");



































 module.exports = app;
