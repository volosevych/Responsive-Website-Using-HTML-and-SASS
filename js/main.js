$(document).ready(function () {
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
  });

  $('.reviews-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 3,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-long-arrow-alt-right"></i></span>'
  });
});