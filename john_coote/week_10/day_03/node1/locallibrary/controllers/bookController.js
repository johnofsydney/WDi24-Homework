var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var async = require('async');

exports.index = function(req, res) {
  async.parallel({
    book_count: function(callback) {
      Book.count(callback)
    },
    book_instance_count: function(callback) {
      BookInstance.count(callback);
    },
    book_instance_available_count: function( callback)  {
      BookInstance.count({ status: 'Available'}, callback)
    },
    author_count: function(callback) {
      Author.count(callback);
    },
    genre_count: function(callback ) {
      Genre.count(callback);
    },
     function(arr,results) {
       res.render('index', {data: results})
     }

  })

};

exports.book_list = function(req, res) {
  res.send('Book List Coming Soon');
};

exports.book_detail = function(req, res) {
  res.send('Book Detail Coming Soon');
};

exports.book_create_get = function(req, res) {
  res.send('Book Create Get Coming Soon');
};

exports.book_create_post = function(req, res) {
  res.send('Book Create Post Coming Soon');
};

exports.book_delete_get = function(req, res) {
  res.send('Book Delete Get Coming Soon');
};

exports.book_delete_post = function(req, res) {
  res.send('Book Delete Post Coming Soon');
};


exports.book_update_get = function(req, res) {
  res.send('Book Update Get Coming Soon');
};

exports.book_update_post = function(req, res) {
  res.send('Book Update Post Coming Soon');
};
