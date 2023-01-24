
import showDate from '/modules/show_date.js';
import { libraryData } from '/modules/event_handler.js';

setInterval(showDate, 5000);

document.getElementById('addbook').classList.add('show-none');
document.getElementById('contact').classList.add('show-none');

libraryData.showSavedData();
