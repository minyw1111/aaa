$(function () {
  $("#info").click(function () {
    $("#popup").fadeIn();
    return false;
  });
  $("#close").click(function () {
    $("#popup").fadeOut();
    return false;
  });
  $("#gnb > ul > li").hover(
    function () {
      $(this).find(".sub").stop().slideDown();
    },
    function () {
      $(".sub").stop().slideUp();
    }
  );
  var idx = ""; // 변수 idx 선언
  var bx_slider2 = $(".cont08 .bxslider").bxSlider({
    mode: "horizontal",
    auto: true,
    speed: 700,
    minSlides: 1,
    maxSlides: 2,
    moveSlides: 1,
    pause: 4000,
    slideWidth: 400,
    slideMargin: 400,
    pager: false,
    controls: true,
    touchEnabled: navigator.maxTouchPoints > 0,

    onSliderLoad: function () {
      // 슬라이드 로드 되자마자 첫번째 슬라이드에 active 적용

      $(".cont08 .bxslider li.m0")
        .next()
        .css({ transform: "scale(1.5)" })
        .animate({ transform: "scale(1)" }, 1000, function () {
          $(this).css({ transform: "scale(1)", transition: "0.5s ease" });
        });
      $(".cont08 .con li.m1 .desc_product").find("p").addClass("on");
    },
    onSlideAfter: function (el, current) {
      // 슬라이드가 넘어간 직후 적용되는 콜백 함수
      idx = bx_slider2.getCurrentSlide();

      $(".cont08 .bxslider li.m" + idx)
        .next()
        .css({ transform: "scale(1.5)", transition: "0.5s ease" })
        .animate({ transform: "scale(1)" }, 1000, function () {
          $(this).css({ transform: "scale(1)", transition: "0.5s ease" });
        });
      //console.log("idx" + idx);
      $(".cont08 .con li .desc_product p").removeClass("on");
      $(".cont08 .con li.m" + idx)
        .next()
        .find(".desc_product")
        .children("p")
        .addClass("on");

      if (idx == 3) {
        $(".cont08 .con li.m0")
          .find(".desc_product")
          .children("p")
          .addClass("on");
      }
    },
  });

  $(window).scroll(function () {
    let ht = $(this).scrollTop();
    console.log(ht);
    if (ht > 1100) {
      $("#btn-top").addClass("on");
    } else {
      $("#btn-top").removeClass("on");
    }
  });
});
