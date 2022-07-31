import './style.css';
import addFooter from './modules/addFooter.js';
import fetchData from './modules/fetchData.js';
// import splitItems from './modules/splitData';
import countItems from './modules/itemsCounter.js';
import addHeader from './modules/addHeader.js';

addHeader();
addFooter();
fetchData();
countItems();
