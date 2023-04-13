const Router = require('koa-router')

const { register, login ,select} = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', register)

// 登录接口
router.post('/login', login)

// 测试查询
router.get('/select', select)
module.exports = router