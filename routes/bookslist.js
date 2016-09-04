module.exports = function (app) {
  var Book = global.dbHelper.getModel('book');
  app.route('/bookslist')
    .all(function (req, res, next) {
      if (req.session.user) {
        console.log(req.session);
        next();
      } else {
        res.status(404).send('请先登陆');
      }
    })
    .get(function (req, res) {
      Book.find({}, function (err, doc) {
        if (err) {
          console.log('查询书籍失败...');
        }else if (doc) {
          res.send(doc);
        }
      });
    })
    .post(function (req, res) {
      var postData = req.body;
      console.log(postData);
      Book.findOne({name: postData.name}, function (err, doc) {
        if (err) {
          res.sendStatus(500);
        } else if (doc) {
          res.status(500).send('该书已经存在！');
        } else {
          Book.create (postData, function (err, doc) {
            if (err) {
              console.log('数据保存失败...');
              res.sendStatus(500);
            } else {
              console.log('数据保存成功！');
              res.sendStatus(200);
            }
          });
        }
      });
    });
};
