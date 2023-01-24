const showContent = (e) => {
  const displayContent = e.target.getAttribute('link-name');
  const contents = document.querySelectorAll('.toggle');
  contents.forEach((item) => {
    item.classList.add('show-none');
    document.getElementById(displayContent).classList.remove('show-none');
  });
};

export default showContent;