var swiper = new Swiper(".sec6Swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },

  
});

