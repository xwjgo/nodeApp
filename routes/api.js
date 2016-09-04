module.exports = function (app) {

  // 处理跨域，所以请求均设置响应头

  app.use(function (req, res, next) {
    console.log('*...');
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.101:8080');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

  app.options('*', function (req, res, next) {
    res.end();
  })

  require('./register')(app);
  require('./login')(app);
  require('./bookslist')(app);
  require('./cart')(app);
  require('./logout')(app);
};
