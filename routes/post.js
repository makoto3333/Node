
var fs = require('fs');
var json = fs.readFileSync("article.json", "utf-8");
var obj = JSON.parse(json);
var items = obj.article;

exports.index = function(req, res) {
    res.render('posts/index');
};
exports.show = function(req, res) {
    res.render('posts/show', {post: items[req.params.id]});
};
exports.new = function(req, res) {
    res.render('posts/new');
};
exports.edit = function(req, res) {
    res.render('posts/edit', {post: items[req.params.id], id: req.params.id});
};
exports.update = function(req, res) {
    items[req.body.id] = {
        title: req.body.title,
        body: req.body.body
    };
    res.redirect('/');
};
exports.destroy = function(req, res) {
    items.splice(req.body.id, 1);
    res.redirect('/');
};
exports.create = function(req, res) {
    var post = {
        title: req.body.title,
        body: req.body.body
    };
    items.push(post);
    res.redirect('/');
};
exports.company = function(req, res) {
    res.render('company');
};
exports.workFlow = function(req, res) {
    res.render('workFlow');
};
exports.contact = function(req, res) {
    res.render('contact');
};
exports.recruit = function(req, res) {
    res.render('recruit');
};
exports.bbs = function(req, res) {
    res.render('bbs', {posts: items});
};
