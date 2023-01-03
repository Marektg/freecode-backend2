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





































 module.exports = app;
