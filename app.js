var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

const { HTTP_PORT = 3000 } = process.env;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// 500
app.use((err, req, res, next) => {
    console.log(err.message);
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

module.exports = app;
