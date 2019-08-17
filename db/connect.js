const mongoose = require('mongoose');
const config = require('../config/config.js');

const DB_URL = config.db.host + config.db.database;
/**
 * 连接
 */
mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, });
/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;