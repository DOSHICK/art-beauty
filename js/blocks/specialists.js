$(document).ready(function () {
  $('.specialists__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

let specialistsBtnNext = document.querySelector(".slider-button-next")
specialistsBtnNext.onclick = function () {
  $('.specialists__list').slick('slickNext');
}

let specialistsBtnPrev = document.querySelector(".slider-button-prev")
specialistsBtnPrev.onclick = function () {
  $('.specialists__list').slick('slickPrev');
}
