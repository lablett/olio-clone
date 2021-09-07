import React from 'react';
import ArticleCard from '../../components/articles/ArticleCard';


const ArticleListContainer = ({ articleList, viewedArticles, selectedArticle, onClickHandler }) => {
  let articleCardList;

  if (articleList.length > 0) {
    articleCardList = articleList.map((article) => {
      const isViewed = viewedArticles.includes(article.id);
      const isSelected = !!(selectedArticle === article.id);

      return (
        <ArticleCard
          key={article.id}
          article={article}
          isViewed={isViewed}
          isSelected={isSelected}
          setSelectedArticle={onClickHandler}
        />
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
