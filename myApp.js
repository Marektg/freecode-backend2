let express = require('express');

let app = express();
// console.log("Hello World");
let filePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";
app.use(function middleware(req, res, next) {
    // Do something
    console.log(req.method + " " + req.path + " - " + req.ip)
    // Call the next function in line:
    next();
});
app.get("/", function (req, res) {

    res.sendFile(filePath)
});
app.use("/public", express.static(publicPath));
app.get("/json", function (req, res) {
    let message = "Hello json";
    
    res.json({
        message: `${message}`
    });
});
app.get("/:word/echo", (req, res) => {
    
    res.json({
        word: `${req.params.word}`
    })
});
app.get("/name", (req, res) => {
    const { first: firstName, last: lastName } = req.query;
    res.json({
        name: `${firstName} ${lastName}`
    })
})
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
},
    (req,res) => {
    res.json({
        time: `${req.time}`
    })
})





































 module.exports = app;
