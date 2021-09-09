/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabItem from './tabs/TabItem';
import ArticleListContainer from './articles/ArticleListContainer';
import ArticleMapContainer from './articles/ArticleMapContainer';
import { getAllArticles, setArticleViewed } from '../store/actions/main.actions';

import article from '../scss/article.module.scss';
import content from '../scss/content.module.scss';
import tab from '../scss/tab.module.scss';


const ContentContainer = ({
  getAllArticles,
  articleList,
  viewedArticles,
  setArticleViewed,
}) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [selectedArticle, setSelectedArticle] = React.useState();

  const onClickHandler = (articleId) => {
    if (articleId !== selectedArticle) {
      setSelectedArticle(articleId);
      setArticleViewed(articleId);
    } else {
      setSelectedArticle();
    }
  };

  const componentProps = {
    articleList,
    viewedArticles,
    selectedArticle,
    onClickHandler,
  };

  const componentList = [
    { name: 'List', component: <ArticleListContainer {...componentProps} /> },
    { name: 'Map', component: <ArticleMapContainer {...componentProps} setCurrentTab={setCurrentTab} /> },
  ];

  const tabItems = componentList.map((component, index) => {
    return <TabItem key={index} name={component.name} active={currentTab === index} click={() => setCurrentTab(index)} />;
  });

  React.useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className={content.container}>
      <div className={tab.container}>
        {tabItems}
      </div>
      <div className={article.container}>
        {componentList[currentTab].component}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    articleList: state.main.articleList,
    viewedArticles: state.main.viewedArticles,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllArticles,
  setArticleViewed,
}, dispatch);

ContentContainer.propTypes = {
  getAllArticles: PropTypes.func.isRequired,
  articleList: PropTypes.array.isRequired,
  setArticleViewed: PropTypes.func.isRequired,
  viewedArticles: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
