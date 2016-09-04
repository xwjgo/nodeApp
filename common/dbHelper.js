var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require('./models');

for (var m in models) {
  var typeSchema =  new Schema(models[m]);
  mongoose.model(m, typeSchema);
}

var _getModel = function (type) {
  return mongoose.model(type);
};

module.exports = {
  getModel: function (type) {
    return _getModel(type);
  }
};



