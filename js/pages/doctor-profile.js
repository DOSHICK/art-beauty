
// let cliuentsBtnNext = document.querySelector(".example > .slider__wrapper > .slider__navigation > .slider-button-next")
// cliuentsBtnNext.onclick = function () {
//   $('.clients__list').slick('slickNext');
// }

// let cliuentsBtnPrev = document.querySelector(".clients-button-prev")
// cliuentsBtnPrev.onclick = function () {
//   $('.clients__list').slick('slickPrev');
// }

// let exampleList = document.querySelectorAll(".example__list");
// // btns 
// let currentBtnList = document.querySelectorAll(".slider-button-next");
// let currentPrevList = document.querySelectorAll(".slider-button-prev")


// for (let index = 0; index < exampleList.length; index++) {

//   let CurrentList = exampleList[index];
//   console.log(CurrentList);
  

//   let currentBtnNext = currentPrevList[index];

//   currentBtnNext.onclick = function () {
//     $(exampleList[index]).slick('slickNext');
//   }
//   console.log(typeof(currentBtnNext))

//   let currentPrev = currentPrevList[index];
//   currentPrev.onclick = function () {
//     $(exampleList[index]).slick('slickPrev');
//   }
//   console.log(currentPrev);


//   $(document).ready(function () {
//     $(CurrentList).slick({
//       infinite: true,
//       centerMode: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 650,
//           settings: {
//             slidesToShow: 1,
//             centerMode: false,
//           }
//         },

//       ]
//     });
//   });


//   // работа с классами (со стилями)
//   $(CurrentList).on('beforeChange', function (event, slick, currentSlide) {
//     let currentItem = CurrentList.querySelector(".slick-current");

//     let prevSibling = currentItem.previousSibling;
//     let nextSibling = currentItem.nextSibling;

//     prevSibling.classList.remove("prev-slide");
//     nextSibling.classList.remove("next-slide");
//   });

//   $(CurrentList).on('afterChange', function (event, slick, currentSlide) {
//     let currentItem = CurrentList.querySelector(".slick-current");

//     let prevSibling = currentItem.previousSibling;
//     let nextSibling = currentItem.nextSibling;

//     prevSibling.classList.add("prev-slide");
//     nextSibling.classList.add("next-slide");

//   });

// }

