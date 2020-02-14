var express = require('express');
var fs = require('fs');
// 引入form-data文件上传解析包
var formidable = require('formidable');
var path = require('path');
var sd = require('silly-datetime')
var Photo = require('../models/Photo');

var router = express.Router();
var dir = '/public/photos/';

// Get Upload Page
router.get('/', function (req, res, next) {
  res.render('upload', {
    title: 'Photo Upload'
  })
});

// Post Upload FormData
router.post('/', function (req, res, next) {
  let form = new formidable.IncomingForm();
  // 编码格式
  form.encoding = 'utf-8';
  // 保留扩展名
  form.keepExtensions = true;
  // 图片上传后的存储路径-绝对路径
  form.uploadDir = path.join(__dirname, '../public/photos/');
  console.log(form.uploadDir);
  // parse方法会转换请求（req）中所包含的表单数据
  form.parse(req, function (err, fields, files) {
    // err:错误信息
    // fields:表单域的其他请求参数
    // files：上传的文件
    if (err) return next(err);
    let imgName = files.upload.name;
    var oldpath = files.upload.path;
    var newpath = path.parse(imgName).name + '_' + sd.format(new Date(), "YYYYMMDDHHmmss") + path.parse(imgName).ext;
    // 打印格式化路径为对象
    // { root: '', dir: '', base: 'tiger.jpg', ext: '.jpg', name: 'tiger' }
    console.log(path.parse(imgName));
    // 重命名图片路径，防止页面无法渲染
    fs.rename(oldpath, form.uploadDir + newpath, function (err) {
      if (err) return next(err);
      let body = {
        name: fields.title,
        path: newpath
      }
      new Photo(body).save(function (err, photo) {
        if (err) return next(err);
        res.redirect('/')
      })
    })
  })
});

module.exports = router;
