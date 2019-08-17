var db = require('../db/connect');
var Schema = db.Schema;

var BillSchema = new Schema({
    type: {
        type: Number
    },
    iconSelected: {
        type: Number
    },
    money: {
        type: Number
    },
    notes: {
        type: String
    },
    date: {
        type: String
    },
    getWeek: {
        type: String
    },
    tel: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    del: {
        type: Number,
        default: 0
    }
});

module.exports = db.model('Bill', BillSchema);