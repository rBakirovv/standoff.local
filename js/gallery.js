window.addEventListener("DOMContentLoaded", function () {
  const privatesGalleryThumbnail = new Swiper('.privates-gallery__thumbnails-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      600: {
        slidesPerView: 6,
      },
    },
  });

  const privatesGallery = new Swiper('.privates-gallery__slider-container', {
    navigation: {
      nextEl: '.privates-gallery-btn-next',
      prevEl: '.privates-gallery-btn-prev',
    },
    thumbs: {
      swiper: privatesGalleryThumbnail
    }
  });
})