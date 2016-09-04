module.exports = function (app) {
  app.route('/logout')
    .get(function (req, res) {
      req.session.user = null;
      res.status(200).send('退出成功');
      console.log('退出成功！');
      console.log(req.session);
    });
};
