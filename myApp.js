require('dotenv').config()
let express = require('express');
let app = express();

app.get("/", function(req, res) { 
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", function(req, res) {
    res.sendFile(absolutePath = __dirname + '/public/style.css');
});

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message": "HELLO JSON"});
    }
    else {
        res.json({"message": "Hello json"});
    }
});

console.log("Hello World");



































 module.exports = app;
