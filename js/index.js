 // スクロール設定
 $(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒で記述
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
  // ハンバーガーメニュー
  $("#wrapper").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("#humburger").slideDown();
    } else {
      $("#humburger").slideUp();
    }
  });
//   スライダー
  $(".slick01").slick({
    autoplay: true, //「オプション名: 値」の形式で書く
    autoplaySpeed: 4000,
    dots: true, //複数書く場合は「,」でつなぐ
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $("#wrapper").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("#humburger").slideDown();
    } else {
      $("#humburger").slideUp();
    }
  });
  (() => {
    const sample = document.querySelectorAll('.sample');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('sample-animation');
        } else {
          entry.target.classList.remove('sample-animation');
        }
      });
    });
    
    sample.forEach(img => {
      observer.observe(img);
    });
  })();
  (() => {
    const sample = document.querySelectorAll('.sample2');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('sample-animation');
        } else {
          entry.target.classList.remove('sample-animation');
        }
      });
    });
    
    sample.forEach(img => {
      observer.observe(img);
    });
  })();

  