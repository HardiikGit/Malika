// Navigation Bar Js
const sliderBtn = document.querySelector(".nav-btn");
const sliderCloseBtn = document.querySelector(".close-x");
const overlayClose = document.querySelector(".overlay-bg");
const sliderAddClass = document.querySelector(".slider");

sliderBtn.addEventListener("click", () => {
  sliderAddClass.classList.add("open-slider");
  overlayClose.classList.add("open-slider");
});
sliderCloseBtn.addEventListener("click", () => {
  sliderAddClass.classList.remove("open-slider");
  overlayClose.classList.remove("open-slider");
});
overlayClose.addEventListener("click", () => {
  sliderAddClass.classList.remove("open-slider");
  overlayClose.classList.remove("open-slider");
});

// Brand Slider Js
$(document).ready(function () {
  $(".slider-images").owlCarousel({
    items: 5, // Show one item at a time
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 2,
      },
      768: {
        items: 3,
      },

      1094: {
        items: 5,
      },
    },
  });
});

// Review Slider Js
$(document).ready(function () {
  $(".review-slider-center-mode").owlCarousel({
    items: 3, // Show 3 items at a time
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    center: true, // This enables center mode
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      768: {
        items: 1,
        center: true,
      },
      1024: {
        items: 2,
        center: true,
      },
      1200: {
        items: 3,
        center: true,
      },
    },
  });
});

// About Us Slider Timeline
$(document).ready(function () {
  $(".timeline-slider-boxes").owlCarousel({
    items: 5, // Show one item at a time
    loop: false,
    autoplay: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 2,
      },
      1094: {
        items: 5,
      },
    },
  });
});

// Accreditations-slider-images Section JS
$(document).ready(function () {
  $(".Accreditations-slider-images").owlCarousel({
    items: 4, // Show one item at a time
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // 3 seconds
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 2,
      },
      768: {
        items: 3,
      },

      1094: {
        items: 4,
      },
    },
  });
});
