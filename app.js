const products = document.querySelectorAll('.product');

function handleVisibility() {
  products.forEach(product => {
    const productTop = product.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (productTop - screenHeight <= -100) {
      product.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleVisibility);
$(document).ready(function() {
    var currentSlide = 0;
    var totalSlides = $('.product-slide').length;
  
    function showSlide(index) {
      $('.product-slide').hide();
      $('.product-slide').eq(index).show();
    }
  
    showSlide(currentSlide);
  
    $('.cta').click(function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });
  });