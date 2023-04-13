const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const vaccinesArticle = seq.define('vaccinesArticle', {
    // ... (属性)
  }, {
    tableName: 'vaccines_article'
  });

module.exports = vaccinesArticle