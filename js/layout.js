$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  autoHeight: true,
  navText: [
    "<i class='mdi mdi-arrow-left'></i>",
    "<i class='mdi mdi-arrow-right'></i>" 
  ],
  autoplaySpeed: 1000,
});

$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  autoplaySpeed: 1000,
  margin: 20,
  autoWidth: true,
  responsive: {
    0: {
      items:2,
      margin: 20,
    },
    600: {
      items:3
    },
    1000: {
      items:4
    },
  }
});

// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});

var swiper = new Swiper('.swiper-seller', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next.seller',
    prevEl: '.swiper-button-prev.seller',
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  disableOnInteraction: true,
  speed: 1000,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15
    },
  }
});

var swiper = new Swiper('.swiper-hot', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next.hot',
    prevEl: '.swiper-button-prev.hot',
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  disableOnInteraction: true,
  speed: 1000,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15
    },
  }
});

var swiper = new Swiper('.swiper-construction', {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next.construction',
    prevEl: '.swiper-button-prev.construction',
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  disableOnInteraction: true,
  speed: 1000,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }
});

var swiper = new Swiper('.swiper-category-bottom', {
  slidesPerView: 5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next.category-bottom',
    prevEl: '.swiper-button-prev.category-bottom',
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  disableOnInteraction: true,
  speed: 1000,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  }
});

$(document).ready(() => {
  const windowWidth = document.body.clientWidth;
  const pageUrl = window.location.href;


  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.go-top').fadeIn().css('transform','scale(1)');
      $('.menu').addClass('down animated slideInDown');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
      $('.menu').removeClass('down animated slideInDown');

    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').toggleClass('out');
    $('.overlay-menu').toggleClass('overlay-in');
  });

  $('.overlay-menu, .nav-close, .category h4 i').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
    $('.left').removeClass('active');
    $('.category').removeClass('active');
  });


  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.show-cate').click(function() {
    $('.category ul').addClass('active');
    $(this).addClass('d-none');
    $('.hidden-cate').removeClass('d-none');
  });

  $('.hidden-cate').click(function() {
    $('.category ul').removeClass('active');
    $(this).addClass('d-none');
    $('.show-cate').removeClass('d-none');
  });

  $('.search-btn i').click(function() {
    $('.search').toggleClass('active');
    $(this).toggleClass('mdi-magnify mdi-close');
    $('.search input').focus();
  });

  $('.category-btn').click(() => {
    $('.category').toggleClass('active');
    $('.overlay-menu').toggleClass('overlay-in');
  });

  if (windowWidth < 1200) {
    $('.category .nav-link').parent().find('ul').filter(function() {
      $(this).parent().find('a').removeAttr('href');
    });
  }
});
