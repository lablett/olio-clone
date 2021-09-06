import React from 'react';

const ArticleListContainer = ({ articlesList }) => {
  return (
    <div>
      <h2>This is an article list placeholder</h2>
      <p>{`There are currently ${articlesList.length} articles`}</p>
    </div>
    
  );
};

export default ArticleListContainer;
