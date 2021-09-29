var express = require('express');
var dashboard = require('./api/index');
var mlebu = require('./api/login');
var metu = require('./api/metu');
var follow = require('./api/followuid');
var dm = require('./api/dmuser');
var dm_img = require('./api/dmimg');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//TRY HOME
app.use('/', dashboard)
//LOGIN
app.use('/login', mlebu)
//LOGOUT
app.use('/metu', metu)
//FOLLOW_UID
app.use('/followuid', follow)
//DM_USER
app.use('/dmuser', dm)
//DM_IMG
app.use('/dmimg', dm_img)

module.exports = app;