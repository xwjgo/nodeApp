# nodeApp

## 简介

这是一个简单的购书平台的后台，使用了nodejs、express、express-session、mongodb、mongoose等功能模块。

由于前后端分离开发，所以后端的主要任务是向前端传输json。

前端的是基于vue.js来实现，代码可以点击[这里](http://xwjgo.github.io)访问到。

目前实现的功能有：

1. 注册
2. 登陆/登出
3. 添加书籍
4. 查看所有书籍
5. 添加购物车并结算

## 项目运行

```
// 启动mongodb
$ sudo mongod
// 启动项目
$ node app.js
```
然后就可以通过http://localhost:8888端口访问了。
