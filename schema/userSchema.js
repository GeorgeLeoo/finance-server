var db = require('../db/connect');
var Schema = db.Schema;

var UserSchema = new Schema({
    tel: {
        type: String,
        unique: true
    },
    pwd: {
        type: String
    },
    nickname: {
        type: String
    },
    openid: {
        type: String
    },
    avatarUrl: {
        type: String,
        default: 'avatar' + new Date().getTime() + '.png'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = db.model('User', UserSchema);