var jwt = require('jsonwebtoken');
const resCode = require('../config/config').resCode;

let Utils = {
    /**
     * 生成token
     * @param {object} content 
     */
    access_token: function (content) {
        let secret = 'jizhangxitongfinancegeorgeleeo';
        let expiresIn = Math.round((new Date().getTime()/1000)) + 3600;
        let token = jwt.sign(content, secret, { expiresIn });
        return {
            token,
            expiresIn
        };
    },
    /**
     * 验证token
     * @param {string} token 
     */
    check_token: function (token) {
        let secret = 'jizhangxitongfinancegeorgeleeo';
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (err, decode) => {
                if (err) {
                    //时间失效或伪造token
                    reject({
                        status: 10010,
                        error: 'invalid_token'
                    });
                } else {
                    resolve();
                }
            });
        })
    },
    resultData: function (code, msg = '', data = {}) {
        return {
            code,
            msg,
            data
        }
    },
    result: {
        successData: function (data, successMsg = '') {
            return Utils.resultData(resCode.SUCCESS, successMsg, data);
        },
        errorData: function (errMsg = '服务器错误') {
            return Utils.resultData(resCode.ERROR, errMsg);
        }
    }
};

module.exports = Utils;
