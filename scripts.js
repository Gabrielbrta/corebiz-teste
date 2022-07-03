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

new Glider(document.querySelector(".glider-produtos"), {
  slidesToShow: 2.5,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  arrows: {
    prev: '.prev',
    next: '.next',
  },
  settings: {
    itemWidth: '100%',
  },
  responsive: [{
    breakpoint: 1250,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2.5,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    },

    breakpoint: 320,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  }],
})