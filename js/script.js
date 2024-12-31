// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


//Toggle class active untuk search form
const searchForm = document.querySelector ('.search-form');
const searchBox = document.querySelector ('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
  if (!hamburger.contains (e.target) && ! navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains (e.target) && ! searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

})