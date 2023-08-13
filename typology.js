function startCarousel() {
    var carousel = document.querySelector('.carousel');
    var carouselWidth = carousel.offsetWidth;
    var slideIndex = 0;
  
    setInterval(function() {
      slideIndex++;
      if (slideIndex >= 3) {
        slideIndex = 0;
      }
      carousel.style.transform = 'translateX(' + (-carouselWidth * slideIndex) + 'px)';
    }, 5000); // Change slide every 10 seconds
  }
  
  startCarousel();