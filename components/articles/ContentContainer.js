import React from 'react';
import ViewToggle from './ViewToggle';
import ArticleListContainer from '../articles/ArticleListContainer';
import ArticleMap from '../articles/ArticleListContainer';

const ContentContainer = () => {
  const view = 0;

  const component = view === 0 ? <ArticleListContainer /> : <ArticleMap />;
  
  return (
    <>
      <h2>This is a content container</h2>
      <ViewToggle />
      {component}
    </>
    

  );
};

export default ContentContainer;
