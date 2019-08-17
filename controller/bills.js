const { billController } = require('./controller');

function getBill(req, res) {
    billController('getBill', req.query, req, res);
}

function saveBill(req, res) {
    billController('saveBill', req.body, req, res);
}

function delBill(req, res) {
    billController('delBill', req.body, req, res);
}

function updateBill(req, res) {
    billController('updateBill', req.body, req, res);
}

function searchBill(req, res) {
    billController('searchBill', req.query, req, res);
}

module.exports = {
    getBill,
    saveBill,
    delBill,
    updateBill,
    searchBill
}