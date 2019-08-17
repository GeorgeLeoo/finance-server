var { catagoryService } = require('./service');

function getCatagory(options) {
    return catagoryService('getCatagory', options);
}

function saveCatagory(options) {
    return catagoryService('saveCatagory', options);
}

function deleteCatagory(options) {
    return catagoryService('deleteCatagory', options);
}

module.exports = {
    getCatagory,
    saveCatagory,
    deleteCatagory
}