import axios from 'axios';

const baseUrl = 'https://yts.mx/api/v2/list_movies.json?genre=animation&limit=50&sort_by=download_count&minimum_rating=7';

const fetchData = async () => {
  let response;
  await axios
    .get(baseUrl)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

export default fetchData;