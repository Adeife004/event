document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarList = document.querySelector(".navbar-list");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navbarList.classList.toggle("active");
  });
});


const swiper = new Swiper('.swiper', {
  loop: true, // Enables looping

  // Pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      620: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});

