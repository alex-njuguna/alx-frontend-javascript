export default function getResponseFromAPI() {
  const success = 'some message here';
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('API not working'));
    }
  });
}
