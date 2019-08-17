const CatagorySchema = require('../schema/catalogSchema');
const utils = require('../utils/utils');
const result = utils.result;

function getCatagory(options, resolve, reject) {
    if (!options.tel) {
        reject(result.errorData('手机号不能为空'));
        return;
    }
    options.del = 0;
    CatagorySchema.find(options, function (err, doc) {
        _getCatagory({err, doc, resolve, reject});
    }).sort({'_id': 1});
}

function saveCatagory(options, resolve, reject) {
    console.log('--- '+JSON.stringify(options));
    if (!options.tel || options.type === undefined) {
        reject(result.errorData('不能为空'));
        return;
    }
    CatagorySchema.insertMany(options, (err, doc) => {
        _saveCatagory({err, doc, resolve, reject})
    });
}

function deleteCatagory(options, resolve, reject) {
    console.log(options);
    if (!options._id) {
        reject(result.errorData('_id不能为空'));
        return;
    }
    CatagorySchema.updateOne(options, {$set: {del: 1}}, function (err, doc) {
        _deleteCatagory({err, doc, resolve, reject})
    })
}

function _getCatagory({err, doc, resolve, reject}) {
    if (err) {
        reject(result.errorData());
    } else {
        resolve(result.successData(doc, '查询成功'));
    }
}

function _saveCatagory({err, doc, resolve, reject}) {
    if (err) {
        if (err.code === 11000) {
            reject(result.errorData('该类别已存在'));
        } else {
            reject(result.errorData());
        }
    } else {

        resolve(result.successData(doc, '添加成功'));
    }
}

function _deleteCatagory({err, doc, resolve, reject}) {
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

module.exports = {
    getCatagory,
    saveCatagory,
    deleteCatagory
}