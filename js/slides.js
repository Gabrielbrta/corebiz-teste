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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: false,
  
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    700: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 65,
    },
  },
});

function removeArrows() {
  const arrows =  document.querySelectorAll('.arrows')
  const widthWindow =  window.matchMedia('(max-width: 700px)').matches
    if(widthWindow) {
      arrows.forEach((item) => item.style.display = 'none')
    } else {
      arrows.forEach((item) => item.style.display = 'flex')
    }
  }
  removeArrows()
