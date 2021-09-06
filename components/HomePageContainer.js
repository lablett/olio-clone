import React from 'react';
import PropTypes from 'prop-types';
import main from '../scss/main.module.scss';
import ContentContainer from './articles/ContentContainer';
import Footer from '../components/common/Footer';


const HomePageContainer =  () => {
  return (
    <div className={main.homepage}>
      <ContentContainer />
      <Footer />
    </div>    
  )
}

// HomePageContainer.defaultProps = {
// };

// HomePageContainer.propTypes = {
// };

export default HomePageContainer;
