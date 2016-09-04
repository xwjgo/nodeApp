module.exports = function (app) {
  var User = global.dbHelper.getModel('user');

  // 处理post请求

  app.route('/login')
    .post(function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      User.findOne({username: username}, function (err, doc) {
        if (!doc) {
          res.status(404).send('用户名不存在');
          console.log('用户名不存在');
        } else {
          if (doc.password !== password) {
            res.status(404).send('密码错误');
            console.log('密码错误');
          } else {
            req.session.user = doc;
            res.status(200).send('登陆成功');
            console.log(req.session);
            console.log('登陆成功！');
          }
        }
      });
    });

}
