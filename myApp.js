let express = require('express');
let app = express();
// console.log("Hello World");
let filePath = __dirname + "/views/index.html"
app.get("/", function (req, res) {

    res.sendFile(filePath)
});



































 module.exports = app;
