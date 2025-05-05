require('dotenv').config()
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.get("/", function(req, res) { 
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", function(req, res) {
    res.sendFile(absolutePath = __dirname + '/public/style.css');
});



app.get("/json", function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/:word/echo", function(req, res, next) {
    var word = req.params.word
    res.json({"echo": word});
    next();
});

 app.get("/name", function(req, res) {
    var firstname = req.query.first;
    var lastname = req.query.last;
    res.json({"name": firstname + " " + lastname});
}) ;

/* app.use(bodyParser.urlencoded({extended: false})); */

app.post("/name", function(req, res) {
    var firstname = req.body.first;
    var lastname = req.body.last;
    res.json({"name": firstname + " " + lastname});
});

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.json({time: req.time});
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
