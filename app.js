'use strict'
require('dotenv').config();

const jsonwebtoken = require('jsonwebtoken');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require("helmet");

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const routerAdmin = require('./routes/admin');
const routerPsikolog = require('./routes/psikolog');
const routerUser = require('./routes/user');
const routerTesMental = require('./routes/tesMental');

const {main} = require('./wa');

const validateJWT = (req, res, next) => {
  try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        req.jwt = token;
        return res.status(201).json({
           role: decoded.role,
        });
    } catch (error) {
        return res.status(401).json({
        message: 'Auth failed',
        error
        });
    }
}

const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = file.fieldname
        cb(null, `./public/images/${path}`);
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}


// main();

const app = express();
const cors = require('cors')
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({storage: fileStorage, fileFilter: fileFilter}).any());

app.use(express.static('images'))


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/cek', validateJWT);

app.use(routerAdmin);
app.use(routerPsikolog);
app.use(routerUser);
app.use(routerTesMental);

module.exports = app;
