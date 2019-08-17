const { userController } = require('./controller');

function login(req, res) {
    userController('login', req.body, req, res);
}

function register(req, res) {
    userController('register', req.body, req, res);
}

function updatePwd(req, res) {
    userController('updatePwd', req.body, req, res);
}

function nickname(req, res) {
    userController('nickname', req.body, req, res);
}

function updateAvatar(req, res) {
    userController('updateAvatar', { file: req.files, tel: req.body.tel }, req, res);
}


module.exports = {
    login,
    register,
    updatePwd,
    nickname,
    updateAvatar
}