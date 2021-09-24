
export default async function fetcher(requestBody) {
  // this can be replaced with AXIOS, which one is better?
  return await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status !== 200 && res.status !== 201) {
      throw new Error('Failed')
    }
    return res.json();
  })
  .then(resData => {
    return resData;
  })
  .catch(err => {
    return err;
  });
}

