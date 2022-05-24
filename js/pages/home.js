$(document).ready(function () {
  $('.offer__list').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    arrows: false,
  });
});

let offerCounter = document.querySelectorAll(".offer__counter")
for (let index = 0; index < offerCounter.length; index++){
  let currentItem = offerCounter[index];
  let currentSlide = currentItem.querySelector('.offer__current');
  let allSlides = currentItem.querySelector('.offer__all');
  currentSlide.innerHTML = "0" + (index + 1);
  allSlides.innerHTML = "/"+ offerCounter.length
}