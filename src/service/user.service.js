const User=require('../model/user.model')
class UserService {
    async selectUser() {
      const res=await User.findAll({
        attributes: ['users_account','nickname']
      });
      return res
    }
  }
  
  module.exports = new UserService()