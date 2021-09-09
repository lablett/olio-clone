/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
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

  const className = `${article.card}${isViewed ? `${article.viewed}` : ''}${isSelected ? `${article.expanded}` : ''}`;

  const expandedContent = (
    <div className={article.expandedContent}>
      <p>{`Location: ${location.town}`}</p>
      <p>{`Collection notes: ${collection_notes}`}</p>
      <p>{`Expiry: ${new Date(expiry).toLocaleDateString('en-GB')}`}</p>
    </div>
  );

  return (
    <div className={className} onClick={() => setSelectedArticle(id)}>
      <div className={article.columnLeft}>
        <img src={photoUrl} alt="article" />
      </div>
      <div className={article.columnRight}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {isSelected ? expandedContent : <span />}
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photos: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    collection_notes: PropTypes.string.isRequired,
    expiry: PropTypes.string.isRequired,
  }).isRequired,
  isViewed: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSelectedArticle: PropTypes.func.isRequired,
};

export default ArticleCard;
