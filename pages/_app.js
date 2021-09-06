import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';
import wrapper from '../store/store';
import Error from '../components/common/Error';

import '../scss/global.scss';

class OlioClone extends App {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isMounted: null,
      hasError: false,
      errorDetails: undefined,
    };
  }


  componentDidMount() {
    if (!this.state.isLoading) {
      return;
    }

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({ error: { errorInfo }});
  }

  render() {
    const { Component } = this.props;
    const { hasError } = this.state;

    return (
      <div>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <meta property="og:title" content="Olio Clone | Fight waste!" />
            <meta property="og:description" content="Easily find out what fruit and veg is currently in season." />
            <title>Olio Clone | Fight waste!</title>
        </Head>
        {
            hasError ? (
              <Error />
            ) : (
              <Component isLoading={this.state.isLoading} />
            )
          }
      </div>
        
    );
  }

}

export default wrapper.withRedux(OlioClone);
