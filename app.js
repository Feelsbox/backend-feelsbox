var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require("helmet");

var indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const routerAdmin = require('./routes/admin');
const routerPsikolog = require('./routes/psikolog');
const routerUser = require('./routes/user');

var app = express();
var cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use(routerAdmin)
app.use(routerPsikolog)
app.use(routerUser)

module.exports = app;
