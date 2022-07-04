new Glider(document.querySelector('.js-carousel--simple'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dots: '#dots',
  settings: {
    duration: 0,
  }
})


const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }

});