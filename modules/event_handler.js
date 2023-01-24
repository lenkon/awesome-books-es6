import Library from '/modules/library.js';

const showContent = (e) => {
  const displayContent = e.target.getAttribute('link-name');  
  const contents = document.querySelectorAll('.toggle');
  contents.forEach((item) => {
    item.classList.add('show-none');
    document.getElementById(displayContent).classList.remove('show-none');
  });
}

const menuItems = document.querySelectorAll('.menu-item');
const libraryData = new Library();
libraryData.formInput.addEventListener('submit', libraryData.addBookData.bind(libraryData));
menuItems.forEach((menuItem) => menuItem.addEventListener('click', showContent));

export {libraryData};