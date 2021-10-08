var express = require("express");
var fs = require("fs");

var app = express();

app.post('/insta', function(req, res) {
    // First read existing users.
    fs.writeFile(__dirname + "/" + "insta.json", JSON.stringify(req));
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});