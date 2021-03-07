$(document).ready(function(){
  $(function(){
    var height=$('.header').height();
    $('body').css('margin-top',height);
  });
  AOS.init({
    offset: 250,
    duration:700,
    once: true,
  });

  // ハンバーガーメニュー
  $(function () {
    $(".gnav-btn").on("click", function () {
        $("#global-nav").toggleClass("open");
        $("#bglayer").toggleClass("open");
        $(this).toggleClass("open");
    });
  });
  $(function () {
    $("#bglayer").on("click", function () {
        $("#global-nav").toggleClass("open");
        $(".gnav-btn").toggleClass("open");
        $(this).toggleClass("open");
    });
  });
  $(function(){
    $(".nav__text").on("click", function () {
      $("#global-nav").removeClass("open");
      $(".gnav-btn").removeClass("open");
      $("#bglayer").removeClass("open");
    })
  });

  // スクロールアニメーション
  $(function(){
    $(".contact-btn,.nav__text").on("click",function(){
      var target = $($(this).attr("href")).offset().top;
      target -= 70;
      $("html, body").animate({scrollTop: target}, 400);
      
      return false;
    });
  });
});

//アコーディオン
$(function(){
  $('dd[id != "acc1"]').css("display", "none");
  $(".accordion__question").on("click",function(){
    if(!$(this).hasClass("current-btn")){
      $(".acc-active").slideUp();
      $($(this).attr("href")).slideDown();
      $("dd").removeClass("acc-active");
      $($(this).attr("href")).addClass("acc-active");
      $(".accordion__question").removeClass("current-btn");
      $(this).addClass("current-btn");
    }
    return false;
  });
});

//Swiper 
var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: {
    disableOnInteraction: false,
    delay:5000,
  },
  loop: true,

  breakpoints: {
    1: {
      slidesPerView: 'auto',
      spaceBetween:  30,
    },
    769: {
      spaceBetween: 56,
    }
  }
});

//form
$('#form').submit(function(event){
  var formData = $('#form').serialize();
  $.ajax ({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSep0Shm4cx4l67VbfvUS33izJ4W3ot2R19bUEaYrlfQHoWB7A/formResponse",
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $(".submitbtn").css("display", "none");
        $(".end-message").fadeIn();
      }
    }
  });
  event.preventDefault();
});

const $submitbtn = $('#submitbtn')
$('#form input,#form textarea').on('change', function(){
  if (
    $('#form input[type="text"]').val() !== "" &&
    $('#form input[type="email"]').val() !== "" &&
    $('#form input[type="checkbox"]').val() !== "" &&
    $('#form #form textarea').val() !== "" &&
    $('#form #privacyCheck').prop('checked') === true
  ) {
    $submitbtn.prop('disabled', false);
    $('.alert-message').removeClass('active');
  } else {
    $submitbtn.prop('disabled', true);
    $('.alert-message').addClass('active');
  }
});
