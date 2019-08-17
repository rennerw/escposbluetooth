const fs = require('fs')
const https = require('https')
const express = require("express");

const app = express();
app.use(express.static(__dirname));
app.use(express.json());

// Web bluetooth only works in https server

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/printer", function(req, res) {
    res.sendFile(__dirname + "/html/printer.html");
});

/*app.listen(8061, function () {
    console.log("Server is running on "+ 8061 +" port");
});*/

https.createServer({
    key: fs.readFileSync('server.key'), // make yours
    cert: fs.readFileSync('server.cert') // make yours
  }, app)
  .listen(8061, function () {
    console.log('server running on port 8061! go to https://localhost:8061/printer');
});