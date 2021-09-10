/* eslint-disable no-param-reassign */
import fetchArticles from '../../helpers/fetchArticles';

export const GET_ARTICLES_START = 'GET_ARTICLES_START';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const getAllArticles = () => async (dispatch) => {
  dispatch({ type: GET_ARTICLES_START });
  try {
    const articleList = await fetchArticles();

    dispatch({ type: GET_ARTICLES_SUCCESS, payload: { articleList } });
  } catch (error) {
    dispatch({ type: GET_ARTICLES_ERROR, payload: error });
  }
};

export const SET_ARTICLE_VIEWED = 'SET_ARTICLE_VIEWED';
export const setArticleViewed = (articleId) => async (dispatch, getState) => {
  const currentState = getState();
  const viewedArticles = currentState.main.viewedArticles;
  const newState = [...viewedArticles, articleId];

  dispatch({ type: SET_ARTICLE_VIEWED, payload: { newState } });
};
