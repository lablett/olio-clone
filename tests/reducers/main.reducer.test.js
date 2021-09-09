import { HYDRATE } from 'next-redux-wrapper';

import reducer from '../../store/reducers/main.reducer';

const initialState = {
  isLoading: false,
  error: [],
  articleList: [],
  currentView: 0,
  viewedArticles: [],
};

describe('Main Reducer', () => {
  describe('initial state', () => {
    it('returns initialState by default', () => {
      const actualState = reducer(undefined, {});

      expect(actualState).toEqual(initialState);
    });
  });

  describe('HYDRATE', () => {
    it('reconciles incoming state with initialState', () => {
      const action = {
        type: HYDRATE,
        payload: {
          ...initialState,
        },
      };

      const expectedState = {
        ...initialState,
      };

      const actualState = reducer(undefined, action);

      expect(actualState).toEqual(expectedState);
    });
  });
});
