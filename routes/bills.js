var express = require('express');
var router = express.Router();
var { getBill, saveBill, delBill, updateBill, searchBill } = require('../controller/bills');

/**
 * 获取指定用户下所有账单信息
 * get  /{user_id}
 */
router.get('/', getBill);

/**
 * 新增一个新的账单信息
 * post  /
 */
router.post('/', saveBill);

/**
 * 更新某一条账单信息
 * patch  /{bill_id}
 */
router.post('/update_bill', updateBill);

/**
 * 删除指定用户下的某一条账单信息
 * delete  /
 */
router.post('/del_bill', delBill);

/**
 * 通过关键字搜索指定用户下的某条账单信息
 * get  /search
 */
router.get('/search', searchBill);

module.exports = router;