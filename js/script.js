$(function(){
  // htmlを読み込んでからjqueryを実行するという意味
  $('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    // 自動で動く
    speed:1000,
    // 動くスピード
    autoplaySpeed:5000,
    // 5秒おきに自動スワイプ
    arrows:false,
    centerPadding:'100px',
    // 左右の少し見える部分
    centerMode:true,
      responsive: [
        // slickからコピペ
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
            // 一枚だけ表示
            centerMode:true,
          }
        }
      ]
  });
});

$(function() {
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
    // クリックしたらつけはずしをする
  });
});

$(function() {
  $('.js-accordion').on('click',function(){
    $(this).next().slideToggle();
    // 表示非表示を切り替える
  });
});

$(function(){
  new WOW().init();
});