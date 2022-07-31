import './style.css';
import addFooter from './modules/addFooter.js';
import fetchData from './modules/fetchData.js';
import getLikes from './modules/getLikes';
// import splitItems from './modules/splitData';
import countItems from './modules/itemsCounter.js';
import addHeader from './modules/addHeader.js';
import populatePage from './modules/populatePage';

addHeader();
addFooter();
countItems();
getLikes();

fetchData().then((response) => {
  const restructuredAnimations = [];
  getLikes().then((res) => {
    const likes = res.data;
    const { movies } = response.data.data;
    movies.forEach((anime) => {
      const likesFound = likes.find((like) => like.item_id === String(anime.id));
      if (likesFound) {
        restructuredAnimations.push({
          ...anime,
          likes: likesFound.likes,
        });
      } else {
        restructuredAnimations.push({
          ...anime,
          likes: 0,
        });
      }
    });
    populatePage(restructuredAnimations);
  }).catch(() => {

  });
});
