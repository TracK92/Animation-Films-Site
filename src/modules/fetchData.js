import populatePage from "./populatePage";
const baseUrl = 'https://yts.mx/api/v2/list_movies.json?genre=animation&limit=50&sort_by=download_count&minimum_rating=7';

const fetchData = async() => {
    await fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => populatePage(json.data.movies))
}

export default fetchData;