function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
