/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');


navToggle.onclick = function() {
  mainNav.classList.toggle('main-nav--closed');
};
