/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../store/actions/main.actions';
import fetchArticles from '../../helpers/fetchArticles';

const mockStore = configureMockStore([thunk]);

jest.mock('../../helpers/fetchArticles');


describe('Main Action Creators', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllArticles', () => {
    it('creates GET_ARTICLES_START ACTION', () => {
      const expectedActions = [{ type: actions.GET_ARTICLES_START }];

      const store = mockStore({});

      store.dispatch(actions.getAllArticles());

      expect(fetchArticles).toHaveBeenCalledTimes(1);

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates the GET_ARTICLES_SUCCESS action when articles successfully retrieved', async () => {
      const mockArticleList = [{ id: 123, title: 'some article' }];

      const expectedActions = [
        { type: actions.GET_ARTICLES_START },
        {
          type: actions.GET_ARTICLES_SUCCESS,
          payload: {
            articleList: mockArticleList,
          },
        },
      ];

      fetchArticles.mockResolvedValueOnce(mockArticleList);

      const store = mockStore({});

      await store.dispatch(actions.getAllArticles());

      expect(store.getActions()).toEqual(expectedActions);
      expect(fetchArticles).toHaveBeenCalledTimes(1);
    });

    it('creates the GET_ARTICLES_ERROR action when api call fails', async () => {
      const expectedActions = [
        { type: actions.GET_ARTICLES_START },
        { type: actions.GET_ARTICLES_ERROR, payload: new Error('Nooooo!') },
      ];

      fetchArticles.mockRejectedValueOnce(new Error('Nooooo!'));

      const store = mockStore({});

      await store.dispatch(actions.getAllArticles());

      expect(store.getActions()).toEqual(expectedActions);
      expect(fetchArticles).toHaveBeenCalledTimes(1);
    });
  });
});
