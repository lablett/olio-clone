import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import article from '../../scss/article.module.scss';

const ArticleCard = (props) => {
  const {
    article: {
      title,
      description,
      photos,
    },
    isViewed,
  } = props;

  const photoUrl = photos[0].files.small;

  const className = `${article.card} ${isViewed ? article.viewed : ''}`;

  return (
    <Col md={2} className={className}>
      <Row>
        <Col md={6}>
            <img src={photoUrl} alt="unplugged icon" />
        </Col>
        <Col md={6}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
      </Row>
    </Col>
  );

  // return (
    // <div className={article.card}>
    //   <div className={`${article.column} left`}>
    //     <img src={photoUrl} alt="unplugged icon" />
    //   </div>
    //   <div className={`${article.column} right`}>
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //   </div>
    // </div>
  // );
};

export default ArticleCard;
