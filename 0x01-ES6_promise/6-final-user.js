import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];

  return Promise.allSettled(promises)
    .then((results) => {
      results.map(({ status, value, reason }) => (
        result.push({
          status,
          value: status === 'rejected' ? reason.toStrong() : value,
        })
      ));
      return result;
    });
}

export default handleProfileSignup;
