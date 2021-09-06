/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main.reducer';

const debug = !!(process.env.ENV_NAME === 'development');

const bindMiddleware = (middleware) => {
  if (process.env.ENV_NAME !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const rootReducer = combineReducers({
  main: mainReducer,
});


// eslint-disable-next-line no-unused-vars
const makeStore = (context) => createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default createWrapper(makeStore, { debug });
