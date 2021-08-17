import './index.scss';

import Swiper from '../vendor/swiper/swiper-bundle.min.js';

import { Marquee, loop } from 'dynamic-marquee';

const body = document.querySelector('.page');

const intro = document.querySelector('.intro');

const bgImage = intro.querySelector('.intro__bg');

const introContainer = intro.querySelector('.intro__inner');

const boxContainer = introContainer.querySelector('.intro__box-container');
const box = boxContainer.querySelector('.intro__box');
const boxImage = box.querySelector('.intro__box-image');
const boxShadow = box.querySelector('.intro__box-shadow');

const titleBox = introContainer.querySelector('.intro__container_place_title');
const introTitle = titleBox.querySelector('.intro__title');
const introTitleUp = introTitle.querySelector('.intro__title-span_dir_up');
const introTitleBottom = introTitle.querySelector('.intro__title-span_dir_bottom');
const introLeftLink = titleBox.querySelector('.intro__link_type_left');
const introScrollButton = titleBox.querySelector('.intro__btn');
const introRightLink = titleBox.querySelector('.intro__link_type_right');

const subtitleBox = introContainer.querySelector('.intro__container_place_subtitle');
const subtitle = subtitleBox.querySelector('.intro__subtitle');

const mainTitleBox = introContainer.querySelector('.intro__main-title-wrapper');
const mainTitle = mainTitleBox.querySelector('.intro__main-title');
const mainBtnContainer = mainTitleBox.querySelector('.intro__big-btn-container');
const mainBtn = mainBtnContainer.querySelector('.intro__big-btn');

const slider = document.querySelector('.slider');

const footer = document.querySelector('.socials');

// https://openbase.com/js/dynamic-marquee
const MainBtnMarquee = new Marquee(mainBtn);

// Предотвращает смещение первого элемента
const emptyElement = document.createElement('div');
emptyElement.style.width = '20px';
emptyElement.style.height = '20px';
MainBtnMarquee.appendItem(emptyElement);

MainBtnMarquee.setRate(-80);
loop(MainBtnMarquee, [() => {
  const marqueebtnLabel = document.createElement('span');
  marqueebtnLabel.classList.add('intro__big-btn-text');
  marqueebtnLabel.textContent = 'бронирую';
  return marqueebtnLabel;
}]);

// Предотвращает смещение первого элемента
const emptyElement2 = document.createElement('div');
emptyElement2.style.width = '20px';
emptyElement2.style.height = '20px';

const submitBtn = document.querySelector('.form__submit-btn_place_form');
const submitBtnMarquee = new Marquee(submitBtn);
submitBtnMarquee.appendItem(emptyElement2);
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

const emptyElement3 = document.createElement('div');
emptyElement3.style.width = '20px';
emptyElement3.style.height = '20px';

const subscribeBtn = document.querySelector('.form__submit-btn_place_footer');
const subscribeBtnMarquee = new Marquee(subscribeBtn);
subscribeBtnMarquee.appendItem(emptyElement3);
subscribeBtnMarquee.setRate(-80);
loop(subscribeBtnMarquee, [() => {
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
const animTrigger = [400, 1050, 1850, 2650];
const initialScroll = window.pageYOffset;

let onFooter = false;

const checkClasses = () => {

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

    boxShadow.classList.remove('intro__box-shadow_animated');
    boxImage.classList.remove('intro__box-image_animationReverse');
    boxImage.classList.add('intro__box-image_animation');

    titleBox.classList.remove('intro__container_active');
    subtitle.classList.add('intro__subtitle_hidden');

    mainTitleBox.classList.add('intro__container_active');
    mainTitle.classList.add('intro__main-title_visible');
    mainBtnContainer.classList.add('intro__big-btn-container_visible');
  }
  else {
    bgImage.classList.remove('intro__bg_zoomed');

    boxShadow.classList.add('intro__box-shadow_animated');
    boxImage.classList.remove('intro__box-image_animation');

    subtitle.classList.remove('intro__subtitle_hidden');

    mainTitleBox.classList.remove('intro__container_active');
    mainTitle.classList.remove('intro__main-title_visible');
    mainBtnContainer.classList.remove('intro__big-btn-container_visible');
  }

  if (window.pageYOffset >= animTrigger[2]) {
    slider.classList.add('slider_opened');

    bgImage.classList.add('intro__bg_hidden');

    mainTitleBox.classList.add('intro__main-title-wrapper_hidden');

    box.classList.add('intro__box_hidden');
  }
  else {
    slider.classList.remove('slider_opened');

    bgImage.classList.remove('intro__bg_hidden');

    mainTitleBox.classList.remove('intro__main-title-wrapper_hidden');

    box.classList.remove('intro__box_hidden');
  }

  if (window.pageYOffset >= animTrigger[3]) {
    slider.classList.add('slider_hidden');
    footer.classList.add('socials_opened');

    if (!onFooter) {
      window.scrollTo(0, 3000);
      onFooter = true;
    }
  }
  else {
    slider.classList.remove('slider_hidden');
    footer.classList.remove('socials_opened');

    onFooter = false;
  }
}

const checkProgress = () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= animTrigger[0]) {
    bar2.style.width = `0%`;
    bar3.style.width = `0%`;
    bar4.style.width = `0%`;
    bar5.style.width = `0%`;

    bar1.style.width = `${currentScroll / animTrigger[0] * 100}%`;
  }

  if (currentScroll > animTrigger[0] && currentScroll <= animTrigger[1]) {
    bar1.style.width = `100%`;
    bar3.style.width = `0%`;
    bar4.style.width = `0%`;
    bar5.style.width = `0%`;

    bar2.style.width = `${(currentScroll - animTrigger[0]) / (animTrigger[1] - animTrigger[0]) * 100}%`;
  }

  if (currentScroll > animTrigger[1] && currentScroll <= animTrigger[2]) {
    bar1.style.width = `100%`;
    bar2.style.width = `100%`;
    bar4.style.width = `0%`;
    bar5.style.width = `0%`;

    bar3.style.width = `${(currentScroll - animTrigger[1]) / (animTrigger[2] - animTrigger[1]) * 100}%`;
  }

  if (currentScroll > animTrigger[2] && currentScroll <= animTrigger[3]) {
    bar1.style.width = `100%`;
    bar2.style.width = `100%`;
    bar3.style.width = `100%`;
    bar5.style.width = `0%`;

    bar4.style.width = `${(currentScroll - animTrigger[2]) / (animTrigger[3] - animTrigger[2]) * 100}%`;
  }

  if (currentScroll > animTrigger[3]) {
    bar1.style.width = `100%`;
    bar2.style.width = `100%`;
    bar3.style.width = `100%`;
    bar4.style.width = `100%`;

    bar5.style.width = `100%`;
  }
}

const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const bar4 = document.querySelector('#bar4');
const bar5 = document.querySelector('#bar5');

const loadingModal = document.querySelector('.loading');

window.onload = () => {
  checkClasses();
  checkProgress();
  loadingModal.classList.add('loading_hidden');
  body.classList.remove('page_fixed');

  introTitleUp.classList.add('intro__title-span_animated');
  introTitleBottom.classList.add('intro__title-span_animated');

  let scrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const curPos = window.pageYOffset;

    if (curPos < scrollPos && curPos <= animTrigger[1] && curPos > animTrigger[0]) {
      boxImage.classList.add('intro__box-image_animationReverse');
    }

    checkProgress();
    checkClasses();

    scrollPos = curPos;
  })
}

introScrollButton.addEventListener('click', () => {
  window.scrollTo(0, animTrigger[0]);
  introScrollButton.blur();
})

let isFormModalOpen = false;
const formModal = document.querySelector('#formModal');

mainBtn.addEventListener('click', () => {
  formModal.classList.add('modal_opened');
  body.classList.add('page_fixed');
  isFormModalOpen = true;
})

const gallerySliderSelector = document.querySelector('#slider');
const gallerySwiper = new Swiper(gallerySliderSelector, {
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000
  },
  spaceBetween: 106,
  centeredSlides: true,
  navigation: {
    nextEl: '.slider__button_type_next',
    prevEl: '.slider__button_type_prev',
  }
})

const youTubeBtn = document.querySelector('.slider__youtube');
const youTubeModal = document.querySelector('.modal_type_youtube');
const youTubeModalBtn = youTubeModal.querySelector('.youtube__overlay-wrapper');
let isYouTubeModalOpen = false;
youTubeModalBtn.addEventListener('click', () => {
  youTubeModalBtn.classList.add('youtube__overlay-wrapper_closed');
})

youTubeBtn.addEventListener('click', (e) => {
  youTubeModal.classList.add('modal_opened');
  body.classList.add('page_fixed');
  isYouTubeModalOpen = true;
})

// Закрытие модалок на клик по оверлею или на Esc
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal_opened')) {
    formModal.classList.remove('modal_opened');
    isFormModalOpen = false;

    youTubeModal.classList.remove('modal_opened');
    isYouTubeModalOpen = false;

    body.classList.remove('page_fixed');
  }
})

document.addEventListener('keydown', (e) => {
  if (isFormModalOpen && e.key === "Escape") {
    formModal.classList.remove('modal_opened');
    isFormModalOpen = false;
  }

  if (isYouTubeModalOpen && e.key === "Escape") {
    youTubeModal.classList.remove('modal_opened');
    isYouTubeModalOpen = false;

    body.classList.remove('page_fixed');
  }
})

const btns = document.querySelectorAll('button');
btns.forEach((btn => {
  btn.addEventListener('click', () => {
    btn.blur();
  })
}))
