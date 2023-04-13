const vaccinesArticle=require('../model/vaccinesArticle.model')
class vaccinesArticleService {
    async selectVaccinesArticle() {
      const res=await vaccinesArticle.findAll({
        attributes: ['article_title','author','article_content','release_time','pageviews']
      });
      return res
    }
  }
  
  module.exports = new vaccinesArticleService()