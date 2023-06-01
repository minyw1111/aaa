$(function () {
  $(".head, .sub").hover(
    function () {
      $("header").css("backgroundColor", "#fff");
      $("header .head .menu ul a").css("color", "#333");
      $(".head .logo img").attr("src", "images/logo_black.svg");
      $(".sub").stop().slideDown(500);
    },
    function () {
      $("header").css("backgroundColor", "transparent");
      $("header .head .menu ul a").css("color", "#fff");
      $(".head .logo img").attr("src", "images/logo_white.svg");
      $(".sub").stop().slideUp(500);
    }
  );
});
