import './index.scss';

import Swiper from '../vendor/swiper/swiper-bundle.min.js';

import { Marquee, loop } from 'dynamic-marquee';

import gsap from '../vendor/GSAP/gsap.min';
import {ScrollTrigger} from '../vendor/GSAP/ScrollTrigger.min';

const intro = document.querySelector('.intro');

const bgImage = intro.querySelector('.intro__bg');

const introContainer = intro.querySelector('.intro__inner');

const boxContainer = introContainer.querySelector('.intro__box-container');
const box = boxContainer.querySelector('.intro__box');

const titleBox = introContainer.querySelector('.intro__container_place_title');
const introTitle = titleBox.querySelector('.intro__title');
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
const animTrigger = [400, 1050, 1450, 1850];
const initialScroll = window.pageYOffset;

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
  }
  else {
    slider.classList.remove('slider_hidden');
    footer.classList.remove('socials_opened');
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

window.addEventListener('scroll', () => {
  checkProgress();
  checkClasses();
  console.log(window.pageYOffset)
})

document.addEventListener("DOMContentLoaded", function(){
  checkClasses();
  checkProgress();
});


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
  isYouTubeModalOpen = true;
})

// Анимация коробки
gsap.registerPlugin(ScrollTrigger);

var frame_count  = 16,
    offset_value = 122.3;

gsap.to(".intro__box-image", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 0",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (400),
    pin: true,
    scrub: true,
  }
});

// Закрытие модалок на клик по оверлею или на Esc
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal_opened')) {
    formModal.classList.remove('modal_opened');
    isFormModalOpen = false;

    youTubeModal.classList.remove('modal_opened');
    isYouTubeModalOpen = false;
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
  }
})

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();


  window.scrollTo(0, animTrigger[3])
  formModal.classList.remove('modal_opened');
})
