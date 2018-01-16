var Genre = require('../models/genre');

const {body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter')

exports.genre_list = function(req, res) {
  res.send('Genre List Coming Soon');
};

exports.genre_detail = function(req, res) {
  res.send('Genre Detail Coming Soon');
};

exports.genre_create_get = function(req, res) {
  // res.send('Genre Create Get Coming Soon');
  res.render('genre-form', {errors: []})
};

// exports.genre_create_post = function(req, res) {
//   // res.send('Genre Create Post Coming Soon');
//
// };

exports.genre_create_post = [
  body('name', 'Genre Name is required').isLength({ min: 1 }).trim(),
  sanitizeBody('name').trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    var genre = new Genre( { name: req.body.name } )
    if ( !errors.isEmpty?() ) {
      res.render('genre_form', {genre: genre, errors: errors:array()})
      return
    } else {
      // data mus be valid
      Genre.findOne({'name': req.body.name}).exec(function (err, found_genre) {
        if (err) { return next(err) }
        if (found_genre) {
          res.redirect(found_genre.url)
        } else {
          genre.save(function (err) {
            if (err) {return next(err); }

            res.redirect(genre.url)
          })
        }
      })
    }

  }
];



exports.genre_delete_get = function(req, res) {
  res.send('Genre Delete Get Coming Soon');
};

exports.genre_delete_post = function(req, res) {
  res.send('Genre Delete Post Coming Soon');
};


exports.genre_update_get = function(req, res) {
  res.send('Genre Update Get Coming Soon');
};

exports.genre_update_post = function(req, res) {
  res.send('Genre Update Post Coming Soon');
};
