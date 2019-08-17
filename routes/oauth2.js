var express = require('express');
var Utils = require('./../utils/utils');
const token = Utils.access_token;

var router = express.Router();

/**
 * 获取token
 */
router.get('/token', function (req, res, next) {
    res.json(Utils.result.successData(token(req.query)))
});

module.exports = router;