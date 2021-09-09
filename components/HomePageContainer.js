import React from 'react';
import main from '../scss/main.module.scss';
import ContentContainer from './ContentContainer';
import Footer from './common/Footer';


const HomePageContainer = () => {
  return (
    <div>
      <div className={main.homepage}>
        <ContentContainer />
      </div>
      <Footer />
    </div>
  );
};

export default HomePageContainer;
