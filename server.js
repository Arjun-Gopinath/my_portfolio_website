var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

app.use(express.static('src/static'));

app.get('/',function(req,res){
    res.render('public','index');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
