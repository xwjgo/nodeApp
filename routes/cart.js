module.exports = function (app) {
  app.route('/cart')
    .get(function (req, res) {
      console.log('get cart...');
      console.log(req.session);
      res.status(200).send('cart data...');
    });
};
