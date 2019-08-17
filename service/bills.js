var { billService } = require('./service');

function getBill(options) {
    return billService('getBill', options);
}

function saveBill(options) {
    return billService('saveBill', options);
}

function delBill(options) {
    return billService('delBill', options);
}

function updateBill(options) {
    return billService('updateBill', options);
}

function searchBill(options) {
    return billService('searchBill', options);
}

module.exports = {
    getBill,
    saveBill,
    delBill,
    updateBill,
    searchBill
}