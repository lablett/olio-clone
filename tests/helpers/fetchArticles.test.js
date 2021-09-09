import fetch from 'isomorphic-unfetch';
import fetchArticles from '../../helpers/fetchArticles';

jest.mock('isomorphic-unfetch');

describe('Update user role test', () => {
  const apiUrl = '/api/fetchArticles';
  const mockJsonFn = jest.fn();
  const mockResponseObj = {
    json: mockJsonFn,
  };

  it('calls fetch once', () => {
    fetch.mockReturnValue(Promise.resolve(mockResponseObj));
    mockJsonFn.mockReturnValue(Promise.resolve({ some: 'json' }));

    fetchArticles();
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('calls fetch with the right URL', () => {
    fetch.mockReturnValue(Promise.resolve(mockResponseObj));
    mockJsonFn.mockReturnValue(Promise.resolve({ some: 'json' }));

    fetchArticles();
    expect(fetch.mock.calls[0][0]).toEqual(apiUrl);
  });

  it('resolves with the result from the json call', () => {
    fetch.mockReturnValue(Promise.resolve(mockResponseObj));
    mockJsonFn.mockReturnValue(Promise.resolve({ some: 'json' }));

    return expect(fetchArticles()).resolves.toStrictEqual({ some: 'json' });
  });

  it('rejects with the error from the json call', () => {
    fetch.mockReturnValue(Promise.resolve(mockResponseObj));
    // eslint-disable-next-line prefer-promise-reject-errors
    mockJsonFn.mockReturnValue(Promise.reject('Json Error'));

    return expect(fetchArticles()).rejects.toMatch('Json Error');
  });

  it('rejects with the error from fetch call', () => {
    fetch.mockRejectedValue('Fetch Error');

    return expect(fetchArticles()).rejects.toMatch('Fetch Error');
  });
});
