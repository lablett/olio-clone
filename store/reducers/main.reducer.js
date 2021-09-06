import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_ARTICLES_START,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
} from '../actions/main.actions';

export const initialState = {
  isLoading: false,
  error: [],
  articlesList: [],
  currentView: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      };
    case GET_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articlesList: action.payload.articles,
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default mainReducer;
