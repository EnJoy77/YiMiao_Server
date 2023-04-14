const vaccinesArticle=require('../model/vaccinesArticle.model')
class vaccinesArticleService {
    async selectVaccinesArticle() {
      const res=await vaccinesArticle.findAll({
        attributes: ['article_no','article_title','author','article_content','release_time','pageviews'],
        order: [
          // 将转义 title 并针对有效方向列表进行降序排列
          ['release_time', 'DESC'],
        ]
      });
      return res
    }
  }
  
  module.exports = new vaccinesArticleService()