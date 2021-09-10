/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { createMocks } from 'node-mocks-http';
import fetch from 'isomorphic-unfetch';
import fetchArticlesHandler from '../../../pages/api/fetchArticles';

jest.mock('../../../helpers/fetchArticles');
jest.mock('isomorphic-unfetch');

describe('fetchArticles handler', () => {
  let mockReq;
  let mockRes;

  const mockApiUrl = 'https://www.example.com';

  const mockApiSuccessObject = {
    json: jest.fn().mockResolvedValue({ data: [{ id: 'test-article' }] }),
  };


  beforeAll(() => {
    process.env.ARTICLE_API_URL = mockApiUrl;

    jest.spyOn(console, 'error');
  });


  describe('Fetch Articles', () => {
    beforeEach(() => {
      const { req, res } = createMocks();
      mockReq = req;
      mockRes = res;

      fetch.mockReturnValue(Promise.resolve(mockApiSuccessObject));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls fetch with the correct url', async () => {
      await fetchArticlesHandler(mockReq, mockRes);

      expect(fetch.mock.calls[0][0]).toEqual(mockApiUrl);
    });


    it('calls json on the API response and responds to the request with it', async () => {
      jest.spyOn(mockRes, 'json');
      await fetchArticlesHandler(mockReq, mockRes);

      expect(mockApiSuccessObject.json).toHaveBeenCalledTimes(1);
      expect(mockRes._getStatusCode()).toEqual(200);
      expect(mockRes.json).toHaveBeenCalledWith({ data: [{ id: 'test-article' }] });
      expect(mockRes._getJSONData()).toEqual({ data: [{ id: 'test-article' }] });
    });

    it('throws and responds with error if fetch call fails', async () => {
      fetch.mockReturnValueOnce(Promise.reject(new Error('fetch call error')));

      try {
        await fetchArticlesHandler(mockReq, mockRes);
        throw new Error('fetch call error');
      } catch (error) {
        expect(error.message).toEqual('fetch call error');
        expect(mockRes._getStatusCode()).toEqual(500);
        expect(mockRes._getData()).toEqual('fetch call error');
        expect(console.error).toHaveBeenCalledWith(new Error('fetch call error'));
      }
    });
  });
});
