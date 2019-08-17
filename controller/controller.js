const usersService = require('./../service/users');
const catagoryService = require('./../service/catagorys');
const billService = require('./../service/bills');
const utils = require('../utils/utils');

// 过滤不需要 token 的方法
const filterMethods = ['register','updatePwd'];

function userController(method, options, req, res) {
    if (filterMethods.includes(method)) {
        usersService[method](options).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err)
        });
    } else {
        utils.check_token(req.headers.authorization, res).then(() => {
            usersService[method](options).then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err)
            });
        }).catch((err) => {
            res.json(err);
        })
    }
}


function catagoryController(method, options, req, res) {
    // console.log(req.headers.authorization)
    utils.check_token(req.headers.authorization, res).then(() => {
        catagoryService[method](options).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err)
        });
    }).catch((err) => {
        res.json(err)
    })
    // catagoryService[method](options).then((data) => {
    //     res.json(data);
    // }).catch((err) => {
    //     res.json(err)
    // });
}

function billController(method, options, req, res) {
    utils.check_token(req.headers.authorization, res).then(() => {
        billService[method](options).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err)
        });
    }).catch((err) => {
        res.json(err)
    })
}

module.exports = {
    userController,
    catagoryController,
    billController
}