import fetch from 'isomorphic-unfetch';

export default function fetchArticles() {
  return new Promise((resolve, reject) => {
    fetch(`/api/fetchArticles`)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
