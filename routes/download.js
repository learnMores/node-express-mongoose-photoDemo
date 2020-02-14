var express = require('express');
var router = express.Router();
var path = require('path');

var Photo = require('../models/Photo');

router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  Photo.findOne({ _id: id }, function (err, photo) {
    if (err) return next(err);
    var imgpath = path.join(__dirname, '../public/photos/') + photo.path;

    var newpath = path.parse(photo.path).name.split('_')[0] + path.parse(photo.path).ext;
    console.log(newpath);
    // res.download()：点击图片直接下载
    res.download(imgpath, newpath, function (err) {
      if (err) return next(err);
    });
    // res.sendFile()点击图片查看
    // res.sendFile(imgpath);
  })
});

module.exports = router;
