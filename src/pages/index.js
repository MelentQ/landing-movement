import './index.scss';

const intro = document.querySelector('.intro');
const introContainer = intro.querySelector('.intro__inner');
const introTitle = introContainer.querySelector('.intro__title');
const introLeftLink = introContainer.querySelector('.intro__link_type_left');
const introScrollButton = introContainer.querySelector('.intro__btn');
const introRightLink = introContainer.querySelector('.intro__link_type_right');
const box = introContainer.querySelector('.intro__box');

const subtitle = introContainer.querySelector('.intro__subtitle');
const bgImage = intro.querySelector('.intro__bg');

// Массив значений скролла, при которых срабатывает анимация
const animTrigger = [200];

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= animTrigger[0]) {
    // box.style.width = `1022px`;

    box.classList.add('intro__box_animated');
    introTitle.classList.add('intro__title_hidden');
    introLeftLink.classList.add('intro__link_hide-to-left');
    introScrollButton.classList.add('intro__btn_hidden');
    introRightLink.classList.add('intro__link_hide-to-right');

    subtitle.classList.add('intro__subtitle_visible');
    bgImage.classList.add('intro__bg_visible');
  }
  else {
    // box.style.width = `322px`;

    box.classList.remove('intro__box_animated');
    introTitle.classList.remove('intro__title_hidden');
    introLeftLink.classList.remove('intro__link_hide-to-left');
    introScrollButton.classList.remove('intro__btn_hidden');
    introRightLink.classList.remove('intro__link_hide-to-right');

    subtitle.classList.remove('intro__subtitle_visible');
    bgImage.classList.remove('intro__bg_visible');
  }
})

introScrollButton.addEventListener('click', () => {
  window.scrollTo(0, animTrigger[0]);
  introScrollButton.blur();
})
