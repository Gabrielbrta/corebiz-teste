export const glider = () => new Glider(document.querySelector('.js-carousel--simple'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dots: '#dots',
  settings: {
    duration: 100,
  }
});

export const swiper = () => new Swiper('.swiper', {
 
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    740: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});