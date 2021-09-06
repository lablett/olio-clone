import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ViewToggle from './ViewToggle';
import ArticleListContainer from '../articles/ArticleListContainer';
import ArticleMap from '../articles/ArticleListContainer';
import { getAllArticles } from '../../store/actions/main.actions';

const ContentContainer = ({ getAllArticles, articlesList }) => {
  const view = 0;

  const component = view === 0 ? <ArticleListContainer articlesList={articlesList} /> : <ArticleMap />;
  
  React.useEffect(() => {
    getAllArticles();
  }, [])

  console.log(articlesList)

  return (
    <>
      <h2>This is a content container</h2>
      <ViewToggle />
      {component}
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    articlesList: state.main.articlesList,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllArticles,
}, dispatch);

ContentContainer.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articlesList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
