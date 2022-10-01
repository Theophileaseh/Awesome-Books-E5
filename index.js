/* eslint-disable */
import './modules/storage.js';
import './modules/pageLoad.js';
import './modules/formSubmit.js';
// import * as luxon from "./modules/luxon.js";
import './modules/menu.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js'; // eslint-disable-line

const p = document.querySelector('.real-date-time');
const footerYear = document.querySelector('.footer-year');
p.innerText = DateTime.now().toLocaleString(
  {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  },
);

footerYear.innerText = DateTime.now().toLocaleString(
  {
    year: 'numeric'
  },
);
/* eslint-enable */