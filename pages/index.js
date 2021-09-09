import React from 'react';
import PropTypes from 'prop-types';
import HomePageContainer from '../components/HomePageContainer';
import LoadingAnimation from '../components/common/LoadingAnimation';
import Error from '../components/common/Error';


const Index = ({ isLoading, error }) => {
  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <Error />
    );
  }
  return <HomePageContainer />;
};

Index.defaultProps = {
  isLoading: false,
  error: false,
};

Index.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

export default Index;
