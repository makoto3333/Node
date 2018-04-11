var express = require('express'),
    app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	post = require('./routes/post'),
	methodOverride = require('method-override'),
 	connect        = require('connect');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.use(logger('dev'));
app.use(express.static(__dirname+'/public'));
app.use( methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}) );
//routing

app.get('/', post.index);
app.get('/company', post.company);
app.get('/workFlow', post.workFlow);
app.get('/contact', post.contact);
app.get('/recruit', post.recruit);
app.get('/bbs', post.bbs);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);

app.listen(3000);
console.log("server starting..."+__dirname );
