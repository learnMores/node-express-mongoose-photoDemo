var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/photo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var Schema = mongoose.Schema;

var photoSchema = new Schema({
  name: String,
  path: String
})

module.exports = mongoose.model('Photo', photoSchema);