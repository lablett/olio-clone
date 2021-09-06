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
