import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ViewToggle from './toggle/ViewToggle';
import ArticleListContainer from '../articles/ArticleListContainer';
import ArticleMap from '../articles/ArticleListContainer';
import { getAllArticles } from '../../store/actions/main.actions';

import article from '../../scss/article.module.scss';
import content from '../../scss/content.module.scss';


const ContentContainer = ({ getAllArticles, articleList }) => {
  const view = 0;

  const component = view === 0 ? <ArticleListContainer articleList={articleList} /> : <ArticleMap articleList={articleList}/>;
  
  React.useEffect(() => {
    getAllArticles();
  }, [])

  console.log(articleList)

  return (
    <div className={content.container}>
      <ViewToggle />
      <div className={article.container}>
        {component}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    articleList: state.main.articleList,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllArticles,
}, dispatch);

ContentContainer.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articleList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
