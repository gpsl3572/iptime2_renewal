var swiper = new Swiper(".sec2Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    breakpoints: {
      640: {
        slidesPerView: 2.7,
        spaceBetween: 30
      },
    },

  });