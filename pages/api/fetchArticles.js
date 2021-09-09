import fetch from 'isomorphic-unfetch';

export default async function fetchArticles(req, res) {
  try {
    const API_URL = process.env.ARTICLE_API_URL;

    const response = await fetch(API_URL);

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    res.status(error.status || 500).end(error.message);
  }
}
