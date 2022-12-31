let express = require('express');
let variable = require('dotenv').config();
let app = express();
// console.log("Hello World");
let filePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";
console.log(variable.parsed.MESSAGE_STYLE);
console.log("test");
app.get("/", function (req, res) {

    res.sendFile(filePath)
});
app.use("/public", express.static(publicPath));
app.get("/json", function (req, res) {
    let message = "Hello json";
    if (variable.parsed.MESSAGE_STYLE === "uppercase") {
        newMessage = message.toUpperCase();
    
        res.json({
            message: `${newMessage}`
        });
    } else {
    res.json({
        message: `${message}`
    });
}
})




































 module.exports = app;
