/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {};

  //WEBP checkbrowser ===============================================================================
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
  //=================================================================================================

  document.addEventListener("DOMContentLoaded", function () {
    // PARALAX
    const bgCircles = document.querySelectorAll(".section-circles");

    window.addEventListener("mousemove", function (e) {
      let x = e.clientX * 0.018;
      let y = e.clientY * 0.018;

      paralax(x, y);
    });

    function paralax(x, y) {
      for (let index = 0; index < bgCircles.length; index++) {
        bgCircles[index].style.transform = "translate3d(-".concat(x, "%, -").concat(y, "%, 0)");
      }
    }

    // SCROLL TO ANCHOR
    const goToLinks = document.querySelectorAll("a[data-goto]");

    if (goToLinks.length > 0) {
      for (let index = 0; index < goToLinks.length; index++) {
        goToLinks[index].addEventListener("click", onGoToLinkClick);
      }

      function onGoToLinkClick(e) {
        e.preventDefault();
        const goToLink = e.target;

        if (document.querySelector(goToLink.getAttribute("href"))) {
          const gotoBlock = document.querySelector(goToLink.getAttribute("href"));
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
          });
        }
      }
    }

    // GALLERY SLIDER
    let gallerySlider = new Swiper(".gallery-slider", {
      observer: true,
      observerParents: true,
      observerSlideChildren: true,
      watchOverflow: true,
      lazy: false,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 600,
      freeMode: false,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      allowTouchMove: true,
      navigation: {
        nextEl: ".gallery-slider__btn-next",
        prevEl: ".gallery-slider__btn-prev",
      },
    });

    // REVIEWS SLIDER
    let reviewsSlider = new Swiper(".reviews__slider", {
      observer: true,
      observerParents: true,
      observerSlideChildren: true,
      watchOverflow: true,
      lazy: false,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerView: 3,
      spaceBetween: 18,
      speed: 600,
      freeMode: false,
      loop: false,
      allowTouchMove: true,
      scrollbar: {
        el: ".reviews__slider-scroll",
        draggable: true,
      },
    });
  });
  /******/
})();
