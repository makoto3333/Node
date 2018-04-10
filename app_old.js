var express = require('express'),
    app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	post = require('./routes/post');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.static(__dirname+'/public'));

//routing

app.get('/', post.index);

app.get('/new', function(req,res){
	res.render('new');
});
app.post('/create', function(req,res){
	res.send(req.body.name);
});

app.param('id', function(req,res,next,id){
	var users=['taguti','fkoji','dotinstall'];
	req.params.name=users[id];
	next();
});

app.get('/', function(req,res){
res.render('index', {title:'title'});
});
app.get('/hello/:id', function(req,res){
res.send('hello'+req.params.name);
});
app.get('/bye/:id', function(req,res){
res.send('bye'+req.params.name);
});

app.listen(3000);
console.log("server starting..."+__dirname );
