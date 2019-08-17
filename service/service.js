var usersDB = require('./../db/users');
var catagorysDB = require('./../db/catagorys');
var billsDB = require('./../db/bills');

function userService(method, options) {
    return new Promise((resolve, reject) => {
        usersDB[method](options, resolve, reject);
    });
}

function catagoryService(method, options) {
    return new Promise((resolve, reject) => {
        catagorysDB[method](options, resolve, reject);
    });
}

function billService(method, options) {
    return new Promise((resolve, reject) => {
        billsDB[method](options, resolve, reject);
    });
}

module.exports = {
    userService,
    catagoryService,
    billService
};