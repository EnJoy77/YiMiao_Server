const { selectUser } = require('../service/user.service')

class UserController {
  async register(ctx, next) {
    // 1. 获取数据
    // console.log(ctx.request.body)
    //const { user_name, password } = ctx.request.body
    // 2. 操作数据库
    //const res = await createUser(user_name, password)
    // console.log(res)
    // 3. 返回结果
    //ctx.body = ctx.request.body
  }

  async login(ctx, next) {
    ctx.body = '登录成功'
  }
  async select(ctx, next) {
    const res = await selectUser()
    console.log(res)
    ctx.body = {
      code:0,
      message:'查询成功',
      result:{
        'users_account' : res[0].dataValues.users_account,
        nickname: res[0].dataValues.nickname,
      }
    }
  }
}

module.exports = new UserController()