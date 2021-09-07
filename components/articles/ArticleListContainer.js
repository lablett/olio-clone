import React from 'react';
import ArticleCard from '../../components/articles/ArticleCard';

const ArticleListContainer = ({ articleList, viewedArticles, setArticleViewed }) => {
  let articleCardList;

  if (articleList.length > 0) {
    articleCardList = articleList.map((article) => {
      const isViewed = viewedArticles.includes(article.id);

      return (
        <ArticleCard key={article.id} article={article} isViewed={isViewed} />
      );
    });
  }

  return (
    <>
      {articleCardList}
    </>
  );
};

export default ArticleListContainer;
