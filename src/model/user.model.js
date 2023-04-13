const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型(Model zd_user -> 表 zd_users)
const User = seq.define('User', {
    // ... (属性)
    /*users_account: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: false,
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    users_avatar: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    users_tel: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
      defaultValue: 0,
    },
    users_delete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },*/
  }, {
    tableName: 'users'
  });

// 强制同步数据库(创建数据表)
// User.sync({ force: true })

module.exports = User