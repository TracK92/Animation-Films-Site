import axios from 'axios';

const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8QyFqIJB20CwUvkNHj3d/likes/';

const postLikes = async (id) => {
  let response;
  await axios
    .post(
      likesLink,
      {
        item_id: id,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

export default postLikes;
