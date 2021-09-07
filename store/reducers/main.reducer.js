import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_ARTICLES_START,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  SET_ARTICLE_VIEWED,
} from '../actions/main.actions';

export const initialState = {
  isLoading: false,
  error: [],
  articleList: [],
  currentView: 0,
  viewedArticles: [],
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
        articleList: action.payload.articleList,
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case SET_ARTICLE_VIEWED:
      return {
        ...state,
        viewedArticles: action.payload.newState,
      }
    default:
      return state;
  }
};

export default mainReducer;
