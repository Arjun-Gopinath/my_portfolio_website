var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app)

app.use(express.static(path.join(__dirname,'src')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public','index.html'));
});


