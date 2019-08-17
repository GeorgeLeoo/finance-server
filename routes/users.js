const express = require('express');
const router = express.Router();
const {login, register, updatePwd, nickname, updateAvatar} = require('../controller/users');
/**
 * 用户登录
 * post   /
 */
router.post('/', login);

/**
 * 用户注册
 * post     /sign_up
 */
router.post('/sign_up', register);

/**
 * 修改密码
 * patch    /
 */
router.post('/update_pwd', updatePwd);

/**
 * 修改昵称
 * patch    /nicknames
 */
router.post('/nickname', nickname);

router.post('/avatar', updateAvatar);

module.exports = router;