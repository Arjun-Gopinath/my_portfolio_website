var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

app.use(express.static('src/static'));

app.get('/',function(req,res){
    res.render('index');
});

