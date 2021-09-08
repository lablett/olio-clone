import React from 'react';
import { Row } from 'react-bootstrap';
import article from '../../scss/article.module.scss';

const ArticleCard = (props) => {
  const {
    article: {
      id,
      title,
      description,
      photos,
      location,
      collection_notes,
      expiry,
    },
    isViewed,
    isSelected,
    setSelectedArticle,
  } = props;

  const photoUrl = photos[0].files.medium;

  const className = `${article.card} ${isViewed ? article.viewed : ''} ${isSelected ? article.expanded : ''}`;

  const expandedContent = (
    <div className={article.expandedContent}>
      <p>{`Location: ${location.town}`}</p>
      <p>{`Collection notes: ${collection_notes}`}</p>
      <p>{`Expiry: ${new Date(expiry).toLocaleDateString('en-GB')}`}</p>
    </div>
  )

  return (
    <div className={className} onClick={() => setSelectedArticle(id)}>
      <div className={article.columnLeft}>
        <img src={photoUrl} alt="unplugged icon" />
      </div>
      <div className={article.columnRight}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {isSelected ? expandedContent : <span />}
    </div>
  );
};

export default ArticleCard;
