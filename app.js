var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    ejs = require("ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//app.set('view engine', 'html');
//app.engine('html', ejs.renderFile);

// app.get('/', function(req, res){
//     res.render('index');
// });


app.get('/module/:id/', function(req, res){
    var module =  req.params.id;
    var page = module + '/index';
    res.render(page);
});


app.get('/module/:id/practice', function(req,res){
    var module = req.params.id;
    var page = module + '/practice';   
    res.render(page);
});

app.get('/module/:id/topics/:topic', function(req,res){
    var module =  req.params.id;
    var page = module + '/topics/'+req.params.topic;   
    res.render(page);
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started!!!");
});