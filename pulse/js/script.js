$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rhite.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  dots: false,
                  arrows: false,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  dots: false,
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1,
               }
              }   
        ]
      });

      /* слайдер */




      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
          .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      /* таби */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });  /* зявляється скритий модуль */


    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });  /* для хрестика щоб він зникав*/

/*     $('.button_mini').on('click', function() {
      $('.overlay, #order').fadeIn();
    }); */ //для менших кноаок скрипт щоб зявлялось вікно з формою//


    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });


    $('#consultation-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Будь-ласка, введіть своє імя",
          minlength: jQuery.validator.format("Введіть {0} символа!")
        },
        phone: "Будь-ласка, введіть свій телефон",
        email: {
          required: "Будь-ласка, введіть свою пошту",
          email: "Неправильний формат пошти"
        }
      }
    });
    $('#consultation form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Будь-ласка, введіть своє імя",
          minlength: jQuery.validator.format("Введіть {0} символа!")
        },
        phone: "Будь-ласка, введіть свій телефон",
        email: {
          required: "Будь-ласка, введіть свою пошту",
          email: "Неправильний формат пошти"
        }
      }
    });
    $('#order form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Будь-ласка, введіть своє імя",
          minlength: jQuery.validator.format("Введіть {0} символа!")
        },
        phone: "Будь-ласка, введіть свій телефон",
        email: {
          required: "Будь-ласка, введіть свою пошту",
          email: "Неправильний формат пошти"
        }
      }
    });  //неоптимізована стилізація модальних форм
   
    
    





    $('input[name=phone]').mask("+38(999) 999-9999");
     //////маска вводу номера телефону///
    
    $('form').submit(function(e) {
     e.preventDefault();
     $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
     }).done(function() {
         $(this).find("input").val("");
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');

         $('form').trigger('reset');
     });
     return false;
  });


    //стрілочка чторінки вверх і плавний перехід//

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {                        
        $('.pageup').fadeOut();
      }
    });             //це для того щоб стрілочка появлялась після 1600 пікселів але в стилях в нех дісплей має бути нон//


    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });              //це для того що коли нажимаєш на стрілочку влавно переходить на верх//


  new WOW().init();











/* 
    $('form').submit(function(e) {
      e.preventDefault();

      if (!$(this).valid()) {      
        return;                         
      }                              ///ця частинка коду для того щоб не вілправлялась пуста форма на сервер///

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
      });
      return false;
    });  */




/*     function valideForms(form){
      $('form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Будь-ласка, введіть своє імя",
            minlength: jQuery.validator.format("Введіть {0} символа!")
          },
          phone: "Будь-ласка, введіть свій телефон",
          email: {
            required: "Будь-ласка, введіть свою пошту",
            email: "Неправильний формат пошти"
          }
        }
      });
    };
    
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form'); */

/*       $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefaul();
            $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('.catalog-item__list_active');
        })
      })

      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefaul();
            $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('.catalog-item__list_active');
        })
      }) */

  }); 

  /* силка детальніше */
          

/*   var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: [
        '<img src="icons/left.png">',
        '<img src="icons/rhite.png">'
    ]
  }); */