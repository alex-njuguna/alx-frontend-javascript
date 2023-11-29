function handleResponseFromAPI(promise) {
  const myPromise = { status: 200, body: 'Success' };

  return promise
    .then(() => myPromise)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
