var express = require('express');
var router = express.Router();
var { getCatagory, saveCatagory, deleteCatagory } = require('../controller/catagory');

/**
 * 获取账单信息
 * get  /
 */
router.get('/', getCatagory);

/**
 * 新增账单信息
 * post  /
 */
router.post('/', saveCatagory);

/**
 * 删除账单信息
 * delete  /
 */
router.post('/del', deleteCatagory);

module.exports = router;