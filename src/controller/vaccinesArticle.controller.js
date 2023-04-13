const { selectVaccinesArticle } = require('../service/vaccinesArticle.service')

class vaccinesArticleController {

  async select(ctx, next) {
    const res = await selectVaccinesArticle()
    console.log(res)
    ctx.body = {
      code:0,
      message:'疫苗攻略查询成功',
      result:{
        article_title : res[0].dataValues.article_title,
        author : res[0].dataValues.author,
        article_content : res[0].dataValues.article_content,
        release_time : res[0].dataValues.release_time,
        pageviews : res[0].dataValues.pageviews,
      }
    }
  }
}

module.exports = new vaccinesArticleController()