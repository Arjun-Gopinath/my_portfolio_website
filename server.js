var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

app.set('view engine', 'pug')
app.set('views','./public')

app.use(express.static('src/static'));

app.get('/',(req,res) => {
    res.render('./public/index');
});

var server = app.listen(PORT, () => {
    console.log('server start port');
  });