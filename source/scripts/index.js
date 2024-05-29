/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');

mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
