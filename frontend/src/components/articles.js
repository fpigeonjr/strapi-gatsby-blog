import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticleCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticleCount)
  const rightArticles = articles.slice(leftArticleCount, articles.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article, i) => (
            <Card article={article} key={`article__${article.node.id}`} />
          ))}
        </div>
      </div>
      <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
        {rightArticles.map((article, i) => (
          <Card article={article} key={`article__${article.node.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Articles
