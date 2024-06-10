// let lastScrollTop = 0;
// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         header.style.top = '-80px'; // Adjust according to the header height
//     } else {
//         // Scrolling up
//         header.style.top = '0';
//     }
//     lastScrollTop = scrollTop;
// });

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = slider.children;
  const slideWidth = slides[0].offsetWidth;
  let counter = 1;

  setInterval(() => {
    slider.style.transform = `translateX(${-counter * slideWidth}px)`;
    counter++;
    if (counter === slides.length) {
      counter = 0;
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
      }, 1000);
    } else {
      slider.style.transition = "transform 0.5s ease";
    }
  }, 3000);
});

  
  

