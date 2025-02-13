document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarList = document.querySelector(".navbar-list");
  
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("active");
      navbarList.classList.toggle("active");
    });
  });
  


// gallery script

const images = document.querySelectorAll('.gallery-image');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

images.forEach(image => {
    observer.observe(image);
});
