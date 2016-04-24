var express = require('express');
var app = express();
var ab = "";
app.get('/',function(req,res) {
  res.send("Hello World");
});


app.listen(4000);
