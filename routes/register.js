module.exports = function (app) {
  var User = global.dbHelper.getModel('user');


  // 处理post请求

  app.route('/register')
    .post(function (req, res) {
      console.log('register post...');
      var postData = req.body;
      User.findOne({username: postData.username}, function (err, doc) {
        if (err) {
          res.sendStatus(500);
        }else if (doc) {
          res.status(500).send('用户名已经存在');
        }else {
          User.create(postData, function (err, doc) {
            if (err) {
              console.log('保存数据失败...');
              res.sendStatus(500);
            } else {
              console.log('保存数据成功！');
              res.sendStatus(200);
            }
          });
        }
      });
    });

};

