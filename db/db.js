const resCode = require('../config/config').resCode;
const utils = require('../utils/utils');

function handleError(err, reject) {
    reject(utils.resultData(resCode.ERROR, err));
}

function handleSuccess(doc, resolve) {
    resolve(utils.resultData(resCode.SUCCESS, '', doc));
}

module.exports = {
    handleError,
    handleSuccess
}