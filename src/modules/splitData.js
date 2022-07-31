const baseUrl = 'https://yts.mx/api/v2/list_movies.json?genre=animation&limit=50&sort_by=download_count&minimum_rating=7';

const splitter = (data, len) => {
  let groups = [], i = 0, n = data.length;
  while(i < n) {
    groups.push(data.slice(i, i += len));
  }
  return groups;
};


const splitItems = async () => {
  await fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => console.log(splitter(json.data.movies, 18)[2]));
};





export default splitItems;