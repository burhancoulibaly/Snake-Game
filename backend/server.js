var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

var home = path.resolve("./frontend/home/html/home.html");
var homecss = path.resolve("./frontend/home/css");
var homejs = path.resolve("./frontend/home/js");
var bootstrap = path.resolve("./node_modules/bootstrap/dist");
var jquery = path.resolve("./node_modules/jquery/dist");
var p5 = path.resolve("./node_modules/p5/lib");

app.use('/home', express.static(home));
app.use('/homecss', express.static(homecss));
app.use('/homejs', express.static(homejs));
app.use('/bootstrap', express.static(bootstrap));
app.use('/jquery', express.static(jquery));
app.use('/p5', express.static(p5))

server.listen(process.env.PORT || 8000);
console.log('Server running on port 8000');

app.get('/',function(req,res){
  res.sendFile(home);
})
