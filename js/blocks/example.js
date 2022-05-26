
// let cliuentsBtnNext = document.querySelector(".example > .slider__wrapper > .slider__navigation > .slider-button-next")
// cliuentsBtnNext.onclick = function () {
//   $('.clients__list').slick('slickNext');
// }

// let cliuentsBtnPrev = document.querySelector(".clients-button-prev")
// cliuentsBtnPrev.onclick = function () {
//   $('.clients__list').slick('slickPrev');
// }

let exampleList = document.querySelector(".example__list_1");
// btns 
let example1navigation = document.querySelector(".example__navigation_1 ")
let currentNext = document.querySelector(".example__navigation_1 > .slider-button-next");
let currentPrev = document.querySelector(".example__navigation_1 >.slider-button-prev");





function sliderTypeExample(CurrentList, btnPrev, btnNext) {
  $(document).ready(function () {
    $(CurrentList).slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },

      ]
    });
  });

  // работа с классами (со стилями)
  $(CurrentList).on('beforeChange', function (event, slick, currentSlide) {
    let currentItem = CurrentList.querySelector(".slick-current");

    let prevSibling = currentItem.previousSibling;
    let nextSibling = currentItem.nextSibling;

    prevSibling.classList.remove("prev-slide");
    nextSibling.classList.remove("next-slide");
  });

  $(CurrentList).on('afterChange', function (event, slick, currentSlide) {
    let currentItem = CurrentList.querySelector(".slick-current");

    let prevSibling = currentItem.previousSibling;
    let nextSibling = currentItem.nextSibling;

    prevSibling.classList.add("prev-slide");
    nextSibling.classList.add("next-slide");

  });


  onload = function () {
    btnPrev.onclick = function(){
      $(CurrentList).slick('slickPrev');
    }
    
    btnNext.onclick = function(){
      $(CurrentList).slick('slickNext');
    }
  };

}

sliderTypeExample(exampleList, currentPrev, currentNext)

