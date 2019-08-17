const BillSchema = require('../schema/billSchema');
const utils = require('../utils/utils');
const result = utils.result;

function getBill(options, resolve, reject) {
    if (!options.tel) {
        reject(result.errorData('手机号不能为空'));
        return;
    }
    //分页搜索
    let pageSize = 8;
    let query = {tel: options.tel, "date": {$regex: options.date}, del: 0};
    if (options.type) {
        query.type = parseInt(options.type);
    }
    console.log(query)
    BillSchema.find(query, function (err, doc) {
        _getBill({err, doc, resolve, reject});
    })
    // .sort({ '_id': -1 })
    // .skip(Math.floor(options.currentPage || 0) * pageSize).limit(pageSize);
}

function saveBill(options, resolve, reject) {
    console.log('--- '+JSON.stringify(options));
    if (!options.tel) {
        reject(result.errorData('手机号不能为空'));
        return;
    }
    BillSchema.insertMany(options, function (err, doc) {
        _saveBill({err, doc, resolve, reject});
    })
}

function delBill(options, resolve, reject) {
    if (!options._id) {
        reject(result.errorData('_id不能为空'));
        return;
    }
    BillSchema.updateOne(options, {$set: {del: 1}}, function (err, doc) {
        _delBill({err, doc, resolve, reject});
    })
}

function updateBill(options, resolve, reject) {
    console.log('=== '+options);
    if (!options._id || !options.notes) {
        reject(result.errorData('不能为空'));
        return;
    }
    BillSchema.updateOne({_id: options._id}, {$set: options}, function (err, doc) {
        _updateBill({err, doc, resolve, reject});
    })
}

function searchBill(options, resolve, reject) {
    if (!options.tel) {
        reject(result.errorData('不能为空'));
        return;
    }
    let pageSize = 5;
    // const reg = new RegExp(options.notes, 'i')
    BillSchema.find({tel: options.tel, del: 0, notes: {$regex: options.notes}}, function (err, doc) {
        _getBill({err, doc, resolve, reject});
    })
    // .sort({'_id': -1})
    // .skip(Math.floor(options.currentPage || 0) * pageSize).limit(pageSize);
}

function _getBill({err, doc, resolve, reject}) {
    if (err) {
        reject(result.errorData());
    } else {
        resolve(result.successData(doc, '查询成功'));
    }
}

function _saveBill({err, doc, resolve, reject}) {
    if (err) {
        reject(result.errorData());
    } else {
        resolve(result.successData(doc, '添加成功'));
    }
}

function _delBill({err, doc, resolve, reject}) {
    if (err) {
        reject(result.errorData());
    } else {
        if (doc.nModified === 1) {
            resolve(result.successData({}, '删除成功'));
        } else {
            reject(result.errorData('删除失败'));
        }
    }
}

function _updateBill({err, doc, resolve, reject}) {
    if (err) {
        reject(result.errorData());
    } else {
        if (doc.nModified === 1) {
            resolve(result.successData({}, '更新成功'));
        } else {
            reject(result.errorData('新数据不能和原数据相同'));
        }
    }
}

module.exports = {
    getBill,
    saveBill,
    delBill,
    updateBill,
    searchBill
}