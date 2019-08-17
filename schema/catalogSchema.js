var db = require('../db/connect');
var Schema = db.Schema;

var CatalogSchema = new Schema({
    tel: {
        type: String
    },
    type: {
        type: Number
    },
    data: {
        type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    del: {
        type: Number,
        default: 0
    }
});

module.exports = db.model('Catalog', CatalogSchema);