const { catagoryController } = require('./controller');

function getCatagory(req, res) {
    catagoryController('getCatagory', req.query, req, res);
}

function saveCatagory(req, res) {
    catagoryController('saveCatagory', req.body, req, res);
}

function deleteCatagory(req, res) {
    catagoryController('deleteCatagory', req.body, req, res);
}

module.exports = {
    getCatagory,
    saveCatagory,
    deleteCatagory
}