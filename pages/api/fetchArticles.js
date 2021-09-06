import fetch from 'isomorphic-unfetch';

export default async function fetchArticles(req, res) {
  try {
    const API_URL = 'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

    const response = await fetch(API_URL);

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    res.status(error.status || 500).end(error.message);
  }
}
