var express = require('express');
var router = express.Router();
var Photo = require('../models/Photo')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Photo.find(function (err, photos) {
    if (err) return next(err);
    res.render('index', {
      title: 'Photos',
      photos: photos
    })
  })
});

module.exports = router;
