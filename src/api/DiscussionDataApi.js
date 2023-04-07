import fetch from 'node-fetch';

export async function getDiscussions () {
  const url = "http://localhost:4000/discussions";
  const response = fetch(url, { method: 'GET'});

  return response.then((res) => res.json());
}

export async function createDiscussion (data) {
  const url = "http://localhost:4000/discussions";
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  });

  return response.then((res) => res.json());
}
