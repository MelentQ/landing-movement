import './index.scss';

import { Marquee, loop } from 'dynamic-marquee';

const intro = document.querySelector('.intro');

const bgImage = intro.querySelector('.intro__bg');

const introContainer = intro.querySelector('.intro__inner');

const box = introContainer.querySelector('.intro__box');

const titleBox = introContainer.querySelector('.intro__container_place_title');
const introTitle = titleBox.querySelector('.intro__title');
const introLeftLink = titleBox.querySelector('.intro__link_type_left');
const introScrollButton = titleBox.querySelector('.intro__btn');
const introRightLink = titleBox.querySelector('.intro__link_type_right');

const subtitleBox = introContainer.querySelector('.intro__container_place_subtitle');
const subtitle = subtitleBox.querySelector('.intro__subtitle');

const mainTitleBox = introContainer.querySelector('.intro__container_place_main-title');
const mainTitle = mainTitleBox.querySelector('.intro__main-title');
const mainBtnContainer = mainTitleBox.querySelector('.intro__big-btn-container');
const mainBtn = mainBtnContainer.querySelector('.intro__big-btn');

// https://openbase.com/js/dynamic-marquee
const MainBtnMarquee = new Marquee(mainBtn);

MainBtnMarquee.setRate(-80);
loop(MainBtnMarquee, [() => {
  const marqueebtnLabel = document.createElement('span');
  marqueebtnLabel.classList.add('intro__big-btn-text');
  marqueebtnLabel.textContent = 'бронирую';
  return marqueebtnLabel;
}]);

const submitBtn = document.querySelector('.form__submit-btn');
const submitBtnMarquee = new Marquee(submitBtn);
submitBtnMarquee.setRate(-80);
loop(submitBtnMarquee, [() => {
  const marqueebtnLabel = document.createElement('span');
  marqueebtnLabel.classList.add('form__submit-btn-text');
  marqueebtnLabel.textContent = 'отправить';
  return marqueebtnLabel;
},
() => {
  const marqueebtnLabel = document.createElement('span');
  marqueebtnLabel.classList.add('form__submit-btn-text');
  marqueebtnLabel.classList.add('form__submit-btn-text_color_red');
  marqueebtnLabel.textContent = 'отправить';
  return marqueebtnLabel;
}
]);

// Массив значений скролла, при которых срабатывает анимация
const animTrigger = [400, 800];

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= animTrigger[0]) {
    titleBox.classList.remove('intro__container_active');
    box.classList.add('intro__box_animated');
    introTitle.classList.add('intro__title_hidden');
    introLeftLink.classList.add('intro__link_hide-to-left');
    introScrollButton.classList.add('intro__btn_hidden');
    introRightLink.classList.add('intro__link_hide-to-right');

    subtitle.classList.add('intro__subtitle_visible');
    bgImage.classList.add('intro__bg_visible');
  }
  else {
    titleBox.classList.add('intro__container_active');
    box.classList.remove('intro__box_animated');
    introTitle.classList.remove('intro__title_hidden');
    introLeftLink.classList.remove('intro__link_hide-to-left');
    introScrollButton.classList.remove('intro__btn_hidden');
    introRightLink.classList.remove('intro__link_hide-to-right');

    subtitle.classList.remove('intro__subtitle_visible');
    bgImage.classList.remove('intro__bg_visible');
  }

  if (window.pageYOffset >= animTrigger[1]) {
    bgImage.classList.add('intro__bg_zoomed');

    titleBox.classList.remove('intro__container_active');
    subtitle.classList.add('intro__subtitle_hidden');

    mainTitleBox.classList.add('intro__container_active');
    mainTitle.classList.add('intro__main-title_visible');
    mainBtnContainer.classList.add('intro__big-btn-container_visible');
  }
  else {
    bgImage.classList.remove('intro__bg_zoomed');

    subtitle.classList.remove('intro__subtitle_hidden');

    mainTitleBox.classList.remove('intro__container_active');
    mainTitle.classList.remove('intro__main-title_visible');
    mainBtnContainer.classList.remove('intro__big-btn-container_visible');
  }
})

introScrollButton.addEventListener('click', () => {
  window.scrollTo(0, animTrigger[0]);
  introScrollButton.blur();
})

let isFormModalOpen = false;
const formModal = document.querySelector('#formModal');

mainBtn.addEventListener('click', () => {
  formModal.classList.add('modal_opened');
  isFormModalOpen = true;
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal_opened')) {
    formModal.classList.remove('modal_opened');
    isFormModalOpen = false;
  }
})

document.addEventListener('keydown', (e) => {
  if (isFormModalOpen && e.key === "Escape") {
    formModal.classList.remove('modal_opened');
    isFormModalOpen = false;
  }
})
