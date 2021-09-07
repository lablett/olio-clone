import React from 'react';
import dynamic from 'next/dynamic';

import LoadingAnimation from '../common/LoadingAnimation';
import map from '../../scss/map.module.scss';

const DynamicMap = dynamic(
  () => import('../../components/articles/ArticleMap'),
  { 
    loading: () => <LoadingAnimation />,
    ssr: false,
  }
);

const ArticleMapContainer = (props) => {
  return (
    <div className={map.container}>
      <DynamicMap {...props } />
    </div>
  );
};

export default ArticleMapContainer;
