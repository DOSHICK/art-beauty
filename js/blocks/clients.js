$(document).ready(function () {
  $('.clients__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

let cliuentsBtnNext = document.querySelector(".clients-button-next")
cliuentsBtnNext.onclick = function () {
  $('.clients__list').slick('slickNext');
}

let cliuentsBtnPrev = document.querySelector(".clients-button-prev")
cliuentsBtnPrev.onclick = function () {
  $('.clients__list').slick('slickPrev');
}
