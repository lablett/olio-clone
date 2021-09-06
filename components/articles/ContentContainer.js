import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabItem from './tabs/TabItem';
import ArticleListContainer from '../articles/ArticleListContainer';
import ArticleMap from '../articles/ArticleMap';
import { getAllArticles } from '../../store/actions/main.actions';

import article from '../../scss/article.module.scss';
import content from '../../scss/content.module.scss';
import tab from '../../scss/tab.module.scss';


const ContentContainer = ({ getAllArticles, articleList }) => {
  const [currentTab, setCurrentTab] = React.useState(1);

  const componentList = [
    { name: 'List', component: <ArticleListContainer articleList={articleList}/>},
    { name: 'Map', component: <ArticleMap articleList={articleList}/>},
  ];
  
  const tabItems = componentList.map((component, index) => {
    return <TabItem key={index} name={component.name} active={currentTab === index} click={() => setCurrentTab(index)} />;
  });

  React.useEffect(() => {
    getAllArticles();
  }, [])

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
