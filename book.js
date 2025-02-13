document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarList = document.querySelector(".navbar-list");
  
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("active");
      navbarList.classList.toggle("active");
    });
  });
  