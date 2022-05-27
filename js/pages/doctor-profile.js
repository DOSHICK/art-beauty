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


sliderTypeExample(exampleList2, currentPrev2, currentNext2)
sliderTypeExample(exampleList3, currentPrev3, currentNext3)