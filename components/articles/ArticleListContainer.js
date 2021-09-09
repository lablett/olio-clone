import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';


const ArticleListContainer = ({
  articleList,
  viewedArticles,
  selectedArticle,
  onClickHandler,
}) => {
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

ArticleListContainer.propTypes = {
  articleList: PropTypes.array.isRequired,
  viewedArticles: PropTypes.array.isRequired,
  selectedArticle: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ArticleListContainer;
