import React from 'react';
import ArticleCard from '../../components/articles/ArticleCard';

import { Row } from 'react-bootstrap';

const ArticleListContainer = ({ articleList }) => {
  let articleCardList;

  console.log('length', articleList.length)
  if (articleList.length > 0) {
    articleCardList = articleList.map((article) => (<ArticleCard key ={article.id} article={article} />));
  }

  return (
    <>
      {articleCardList}
    </>
  );
};

export default ArticleListContainer;
