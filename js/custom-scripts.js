$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $('.select-control').click(function() {

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).children('span').text();
            var newPhone = $(this).find('a').html();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-city').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').html(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.select-location ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).children('span').text();
            var newLocation = $(this).find('.location-hidden').html();

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-location').find('.current-city').text(newCity);
            $(this).parents('.select-location').siblings('.link-phone').html(newLocation);

            $(this).parents('.select-location').removeClass('active');

        }

    });

    $('.callback').click(function() {
        $('.window-callback').fadeIn();
    });

    $('.to-order-form span').click(function() {
        $('.window-order').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $( "#order-date" ).datepicker();

    $( "#order-time" ).timepicker({
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Минуты',
        secondText: 'Секунды',
        currentText: 'Сейчас',
        closeText: 'Закрыть'
    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('header[role="banner"] nav').toggleClass('active');
    });

    $('.slider-cost').slick({
        slidesToShow: 4,
        appendArrows: '.slider-cost-control',
        prevArrow: '.slider-cost-prev',
        nextArrow: '.slider-cost-next',
        responsive: [
        {
            breakpoint: 1321,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });

    $('.slider-services').slick({
        slidesToShow: 7,
        appendArrows: '.slider-services-control',
        prevArrow: '.slider-services-prev',
        nextArrow: '.slider-services-next',
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.rate-single-steps ul li').click(function() {

        if(!$(this).hasClass('active')) {

            $('.rate-single-data ul li.active').removeClass('active');
            $('.rate-single-data ul li').eq($(this).index()).addClass('active');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

        }

    });

});
