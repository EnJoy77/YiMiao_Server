const Router = require('koa-router')

const {select} = require('../controller/vaccinesArticle.controller')

const router = new Router({ prefix: '/vaccinesarticle' })


// 查询接口
router.get('/select', select)

module.exports = router