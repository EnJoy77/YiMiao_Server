const { selectVaccinesArticle } = require('../service/vaccinesArticle.service')

class vaccinesArticleController {

  async select(ctx, next) {
    const res = await selectVaccinesArticle()
    console.log(res)
    let info=[]
    for(let i=0;i<res.length;i++){
      info[i]={
        article_no :res[i].dataValues.article_no,
        article_title : res[i].dataValues.article_title,
        author : res[i].dataValues.author,
        article_content : res[i].dataValues.article_content,
        release_time : res[i].dataValues.release_time,
        pageviews : res[i].dataValues.pageviews,
      }
    }
    ctx.body = {
      code:200,
      message:'疫苗攻略查询成功',
      result:info
    }
  }
}

module.exports = new vaccinesArticleController()