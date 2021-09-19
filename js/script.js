$(function ($) {

    //-------------menu----------
    var menuTop = $('.custom_nav').offset().top;

    //alert(menuTop);

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        //alert(scroll);
        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_nav_new');
        } else {
            $('.custom_nav').removeClass('custom_nav_new');
        }

    });

    // smooth scrolling
    $("#mynav ul li a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });
    
    
     // work slider--------------------
    $('.work_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,
        asNavFor:'.work_content_slider',
       
    });

     // work content slider--------------------
    $('.work_content_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        asNavFor:'.work_slider',
       
    });
    
    
    //-------counter js 
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });





});
