var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var Photo = require('../models/Photo');

router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  // 从数据库查找图片的path
  Photo.findById(id, function (err, photo) {
    if (err) return next(err);
    var imgpath = path.join(__dirname, '../public/photos/') + photo.path;
    // 从数据库删除当前图片对象
    Photo.deleteOne({ _id: id }, function (err, photo) {
      if (err) return next(err);
      // 删除图片物理地址
      fs.unlink(imgpath, function (err) {
        if (err) return next(err);
        res.redirect('/');
      })
    })
  })
});

module.exports = router;
