import showDate from './modules/show_date.js';
import showContent from './modules/show_content.js';
import Library from './modules/library.js';

setInterval(showDate, 5000);

document.getElementById('addbook').classList.add('show-none');
document.getElementById('contact').classList.add('show-none');

const menuItems = document.querySelectorAll('.menu-item');
const libraryData = new Library();
libraryData.showSavedData();

libraryData.formInput.addEventListener('submit', libraryData.addBookData.bind(libraryData));
menuItems.forEach((menuItem) => menuItem.addEventListener('click', showContent));