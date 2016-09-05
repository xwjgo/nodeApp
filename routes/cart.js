module.exports = function (app) {
  var Cart = global.dbHelper.getModel('cart');
  app.route('/cart')
    .all(function (req, res, next) {
      if (req.session.user) {
        next();
      } else {
        res.status(404).send('请先登陆');
        console.log('用户没有登陆');
      }
    })
    .get(function (req, res) {
      Cart.find({username: req.session.user.username, status: false}, function (err, doc) {
        res.status(200).send(doc);
      });
    })
    .post(function (req, res) {
      var postData = req.body;
      // 如果是从/cart发出的
      if (postData.postData) {
        var items = postData.postData;
        items.forEach(function (item) {
          var payCart = {
            username: req.session.user.username,
            bookname: item.bookname,
            status: false
          };
          Cart.update(payCart, {$set: {number: item.number, status: true}}, function (err, doc) {
          });
        });
        res.status(200).send('结算成功');
        console.log('结算成功')
        return;
      }
      // 如果请求是从/home发出的
      var book = {
        username: req.session.user.username,
        bookname: postData.bookname,
        number: 1,
        price: postData.price,
        status: false,
      };
      var searchCart = {
        username: req.session.user.username,
        bookname: postData.bookname,
        status: false
      };
      Cart.findOne(searchCart, function (err, doc) {
        if (doc) {
          Cart.update(searchCart, {$set: {number: doc.number + 1}}, function (err) {
            if (err) {
              res.status(500).send('服务端错误');
            } else {
              res.status(200).send('本书已经有了' + (doc.number + 1) + '本书');
            }
          });
        } else {
          Cart.create(book, function (err, doc) {
            res.status(200).send('加入购物车成功');
          });
        }
      })
    });
};
