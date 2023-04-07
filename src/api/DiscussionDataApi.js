import fetch from 'node-fetch';

export async function getDiscussions() {
  let url = "http://localhost:4000/discussions";

  const response = fetch(url, { method: 'GET'});

  return response.then((res) => res.json());
}
