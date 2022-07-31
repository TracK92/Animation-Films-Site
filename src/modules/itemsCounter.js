const counter = document.querySelector('.counter');

const itemsCounter = (data) => {
  counter.innerHTML = `Animation Films ${data.length}`;
};

const baseUrl = 'https://yts.mx/api/v2/list_movies.json?genre=animation&limit=50&sort_by=download_count&minimum_rating=7';

const countItems = async () => {
  await fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => itemsCounter(json.data.movies));
};

export default countItems;