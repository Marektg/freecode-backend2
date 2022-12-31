let express = require('express');
let app = express();
// console.log("Hello World");
let filePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";
app.get("/", function (req, res) {

    res.sendFile(filePath)
});
app.use("/public", express.static(publicPath));
app.get("/json", function (reg, res) {
    res.json({
        message: "Hello json"
    });
})




































 module.exports = app;
