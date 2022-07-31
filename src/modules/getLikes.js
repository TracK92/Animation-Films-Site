import axios from 'axios';

const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8QyFqIJB20CwUvkNHj3d/likes/';

const getLikes = async () => {
  let response;
  await axios
    .get(likesLink)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

export default getLikes;